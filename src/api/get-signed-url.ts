import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

// NOTE: In a production environment, these should be in your .env file
const S3_ENDPOINT = "https://ohvspaqxiylcjfomwpmq.storage.supabase.co/storage/v1/s3"
const S3_ACCESS_KEY = "1255d084f79b93fe9e9a1c0bbb6a5b5a"
const S3_SECRET_KEY = "f22cba480ba8119b38f93a78cdff970e8219bdfad89eef54371b27ee2ba6f3d7"
const BUCKET_NAME = "brand-assets"

const s3Client = new S3Client({
  forcePathStyle: true, // Required for Supabase S3
  region: "us-east-1", // Standard for Supabase
  endpoint: S3_ENDPOINT,
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  },
})

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { fileName, fileType, fieldName } = req.body
    
    if (!fileName || !fileType) {
      return res.status(400).json({ error: "Missing fileName or fileType" })
    }

    // Use fieldName as the fixed filename to ensure overrides if provided,
    // otherwise fallback to the original fileName without timestamp to allow overwriting by name
    const key = fieldName 
      ? `uploads/${fieldName}.${fileName.split('.').pop()}` 
      : `uploads/${fileName}`
    
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      ContentType: fileType,
    })

    // Generate a URL that expires in 60 seconds
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 })

    // The public URL for viewing the file later
    // Supabase public URL format: https://[project-id].supabase.co/storage/v1/object/public/[bucket]/[key]
    // We add a timestamp as a cache buster to ensure the frontend sees the new image immediately
    const supabaseUrl = process.env.SUPABASE_URL || ""
    const projectId = supabaseUrl.replace("https://", "").split(".")[0]
    const publicUrl = `https://${projectId}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${key}?t=${Date.now()}`

    res.json({ uploadUrl: signedUrl, publicUrl })
  } catch (error: any) {
    console.error("Signed URL error:", error)
    res.status(500).json({ error: error.message })
  }
}

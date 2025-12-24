import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { createClient } from "@supabase/supabase-js"
import * as dotenv from "dotenv"

dotenv.config()

const DEFAULT_CONFIG = {
  companyName: 'Summit Tax Advisors Inc.',
  brandNameFirst: 'Summit',
  brandNameSecond: 'Tax',
  logo: '',
  ceoName: 'Edwin Venezuela',
  ceoRole: 'CEO & Founder',
  ceoImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  phone: '787-823-7777',
  email: 'info@summittaxadvisors.com',
  whatsapp: '939-228-1422',
  address: 'Carr 115 Km 16 Bo Rio Grande, Rincón, PR 00677',
  youtube: 'https://www.youtube.com/embed/p-kasvTzniE',
};

// Lazy initialization of Supabase to handle environment variables correctly
let supabaseClient: any = null;

const getSupabase = () => {
  if (supabaseClient) return supabaseClient;
  
  const supabaseUrl = process.env.SUPABASE_URL || process.env.GATSBY_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.GATSBY_SUPABASE_ANON_KEY || '';

  if (supabaseUrl && supabaseKey) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
    return supabaseClient;
  }
  return null;
};

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const supabase = getSupabase();
  
  try {
    // If Supabase is not configured, use default config
    if (!supabase) {
      console.warn("Supabase credentials missing in process.env");
      if (req.method === "GET") {
        return res.json(DEFAULT_CONFIG);
      } else if (req.method === "POST") {
        return res.status(503).json({ 
          error: "Database not configured", 
          details: "Missing SUPABASE_URL or SUPABASE_ANON_KEY" 
        });
      }
    }

    if (req.method === "GET") {
      // Fetch config from Supabase
      // @ts-ignore - Supabase types are complex
      const { data, error } = await supabase
        .from('brand_config')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) {
        console.error("Supabase error:", error);
        res.json(DEFAULT_CONFIG);
      } else if (data && typeof data === 'object' && 'config_data' in data) {
        // @ts-ignore
        const mergedConfig = { ...DEFAULT_CONFIG, ...(data.config_data || {}) };
        res.json(mergedConfig);
      } else {
        res.json(DEFAULT_CONFIG);
      }
    } else if (req.method === "POST") {
      const newData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      
      // Upsert config in Supabase
      // @ts-ignore - Supabase types are complex
      const { error } = await supabase
        .from('brand_config')
        .upsert({ 
          id: 1, 
          config_data: newData,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        res.status(500).json({ error: error.message });
      } else {
        res.json({ success: true, data: newData });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error: any) {
    console.error("API error:", error);
    res.status(500).json({ error: error.message });
  }
}

import * as React from "react"

interface GoHighLevelFormProps {
  /** Spanish form URL from GoHighLevel */
  formUrlEs?: string
  /** English form URL from GoHighLevel */
  formUrlEn?: string
  /** Form height in pixels */
  height?: number
  /** Optional taller height (px) for small screens */
  mobileHeight?: number
  /** Form ID for tracking */
  formId?: string
  /** Optional class name for container */
  className?: string
}

/**
 * GoHighLevelForm - A component that embeds GoHighLevel forms.
 *
 * For full i18n support, create separate forms in GoHighLevel for each language
 * and pass both URLs. The component will automatically display the correct form
 * based on the current language selection.
 *
 * If only one URL is provided, it will be used for both languages with a
 * translated message above the form.
 */
const GoHighLevelForm: React.FC<GoHighLevelFormProps> = ({
  formUrlEs,
  formUrlEn,
  height = 800,
  mobileHeight,
  formId = "ghl-form",
  className = "",
}) => {

  const [containerHeight, setContainerHeight] = React.useState(height)
  const resolvedMobileHeight = React.useMemo(() => mobileHeight ?? height + 400, [mobileHeight, height])

  React.useEffect(() => {
    const updateHeight = () => {
      const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
      setContainerHeight(isMobile ? resolvedMobileHeight : height)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [height, resolvedMobileHeight])

  // Use the English form URL if available, otherwise Spanish, otherwise empty
  const currentFormUrl = formUrlEn || formUrlEs || ""

  if (!currentFormUrl) {
    return (
      <div className={`bg-gray-800/50 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-400">
          No form available
        </p>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className="rounded-lg overflow-hidden"
        style={{ height: containerHeight }}
      >
        <iframe
          src={currentFormUrl}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "3px"
          }}
          id={`inline-${formId}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Form"
          data-height={containerHeight}
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title="Contact Form"
        />
      </div>
    </div>
  )
}

export default GoHighLevelForm


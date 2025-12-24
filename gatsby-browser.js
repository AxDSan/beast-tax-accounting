import "./src/styles/global.css"
import * as React from "react"

import { I18nProvider } from "./src/i18n"
import { ConfigProvider } from "./src/context/ConfigContext"

export const wrapRootElement = ({ element }) => {
  return (
    <ConfigProvider>
      <I18nProvider>
        {element}
      </I18nProvider>
    </ConfigProvider>
  )
}



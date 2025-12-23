import * as React from "react"

import { I18nProvider } from "./src/i18n"

export const wrapRootElement = ({ element }) => {
  return <I18nProvider>{element}</I18nProvider>
}



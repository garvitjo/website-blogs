// import { pathToRoot } from "../util/path"
// import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { classNames } from "../util/lang"
// import { i18n } from "../i18n"

// const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
//   const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
//   const baseDir = pathToRoot(fileData.slug!)
//   return (
//     <h1 class={classNames(displayClass, "page-title")}>
//       <a href={baseDir}>{title}</a>
//     </h1>
//   )
// }

// PageTitle.css = `
// .page-title {
//   margin: 0;
// }
// `

// export default (() => PageTitle) satisfies QuartzComponentConstructor

import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoSrc = joinSegments(baseDir, "static/logo.png");

  return (
    <h1 class={classNames(displayClass, "page-title")}>
      {logoSrc && <img src={logoSrc} alt="Logo" class="logo" />}
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  display: flex;
  align-items: center;
  margin: 0;
}

.page-title .logo {
  margin-right: 10px;
  height: 40px; /* Adjust the height as needed */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

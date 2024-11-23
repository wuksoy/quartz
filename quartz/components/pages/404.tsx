import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>A byte-sized black hole has swallowed this page. Try navigating through the cosmic links below.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

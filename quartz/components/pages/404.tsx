import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>A byte-sized black hole has swallowed this page. Try navigating through the cosmic links below.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

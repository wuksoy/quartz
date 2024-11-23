import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  animation: colorChange 5s infinite;
}

@keyframes colorChange {
  0% {color: tertiary;}
  50% {color: red;}
  100% {color: tertiary;}
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

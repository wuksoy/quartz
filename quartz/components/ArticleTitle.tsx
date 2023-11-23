import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
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

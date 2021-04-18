const md = require('markdown-it')({
  html: true
})
const implicitFigures = require('markdown-it-implicit-figures')

export default async function markdownToHtml (markdown) {
  md.use(implicitFigures)
  return md.render(markdown)
}

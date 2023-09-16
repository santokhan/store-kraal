import MarkdownIt from 'markdown-it'

export default function markdownParser(data: string): string {
    const MD = new MarkdownIt()
    return MD.render(data)
}
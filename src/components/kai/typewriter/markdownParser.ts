import MarkdownIt from 'markdown-it'

export type MarkDown = string;
export type HTML = string;

/**
 * Parse markdown to html
 * @param {string} data 
 * @returns {string}
 */
export default function markdownParser(data: MarkDown): HTML {
    const MD = new MarkdownIt();
    return MD.render(data);
}
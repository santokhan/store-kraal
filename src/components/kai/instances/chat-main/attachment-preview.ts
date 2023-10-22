export function fileName(name: string) {
    const fileInfo = name.split(".")
    const type = fileInfo.pop()
    const fullName = fileInfo.join("")
    const max = 8
    if (fullName.length < max - 1) {
        return fullName
    } else {
        return `${fullName.slice(0, max)}_.${type}`
    }
}
export function BYTEtoKB(BYTE: number) {
    const KB = BYTE / 1000

    if (KB < 1000) {
        return `${Math.round(KB)} KB`
    } else {
        const MB = KB / 1000
        return `${Math.round(MB)} MB`
    }
}
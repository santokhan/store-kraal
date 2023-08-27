export function dateFormatter(dateString: string): string {
    const date = new Date(dateString)

    let formatedList = date.toDateString().split(' ');
    let formated = formatedList.reduce((prev, crnt, index) => {
        if (index === 0) {
            return prev + crnt + ","
        } else {
            return prev + " " + crnt;
        }
    }, "")

    return formated;
}

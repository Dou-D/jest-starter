export const objToSearchStr = (param: Record<string, string | number>) => {
    // {a: 1, b: 2}
    const res:string[] = []
    Object.entries(param).map(item => {
        const [key, value] = item
        let str = key + '=' + String(value)
        res.push(str)
    })
    return res.join('&')
}
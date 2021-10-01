export const getCSSVaribleRoot = (key: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(key)
}

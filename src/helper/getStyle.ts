const getStyle = (ref: any, cssProp: string) => {
    if (!ref.current) return
    const element = ref.current
    const computed = window.getComputedStyle(element).getPropertyValue(cssProp)
    if (!computed) return
    return computed
}

export default getStyle

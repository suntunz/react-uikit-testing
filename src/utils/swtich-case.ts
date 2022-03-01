interface SwitchProps {
    default: unknown
}

const switchCase = <T extends SwitchProps>(key?: string, conditions?: T) => {
    if (!conditions) return ''
    if (!key) return conditions.default
    return (conditions as any)[key] || conditions.default
}

export default switchCase

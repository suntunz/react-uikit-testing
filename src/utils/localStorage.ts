const PREFIX = '__bkUIKit_'

interface ILocalStorageOptions {
    /**
     * local storage name
     */
    key: string

    /**
     * local storage value
     */
    value?: any

    /**
     * prefix local storage name
     */
    withPrefix?: boolean
}

export const getStorage = (options: ILocalStorageOptions): any => {
    const { key, withPrefix = false } = options

    // getting stored value
    if (typeof window !== 'undefined') {
        const storageKey = withPrefix ? `${PREFIX}${key}` : key // check with prefix key
        const storageValue = localStorage.getItem(storageKey)
        // const storageValue = saved !== null && JSON.parse(saved)

        return storageValue
    }
}

export const setStorage = (options: ILocalStorageOptions) => {
    const { key, withPrefix = false, value = '' } = options

    // setting stored value
    if (typeof window !== 'undefined') {
        const storageKey = withPrefix ? `${PREFIX}${key}` : key // check with prefix key
        const storageValue = typeof value === 'string' ? value : JSON.stringify(value)
        localStorage.setItem(storageKey, storageValue)
    }
}

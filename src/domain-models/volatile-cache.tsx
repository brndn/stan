const cacheMap = new Map();

export function cacheHas(key) {
    return cacheMap.has(key);
}

export function getEntry(key) {
    return Promise.resolve(cacheMap.get(key));
}

export function cacheSet(key, value) {
    cacheMap.set(key, value);
}

export function cacheRemove(key) {
    cacheMap.delete(key);
}
import LRU from 'lru-cache'

const options = {
    max: 500,
    length: (n, key) => n * 2 + key.length,
    maxAge: 1000 * 60 * 60
}

const cache = {
    passport: new LRU(options),
    session: new LRU(options)
}

console.log("Cache is initialized");

export default cache;
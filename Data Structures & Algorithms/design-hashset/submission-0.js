class MyHashSet {
    constructor() {
        this.hash = {};
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.hash[key] = 1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.hash[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return !!this.hash[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

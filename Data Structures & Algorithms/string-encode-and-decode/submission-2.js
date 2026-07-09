class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        /*
        To encode, we add to the start of the string the length and # as a delimiter.
        strs=["Hello","World"]

        encode to be:
        "5#Hello5#World"

        Once we encode this, we decode by iterating with two pointers i and j

        "5#Hello5#World"

        To Decode,
        Declare a result array
        Iterate until the end i = 0;
            Iterate until we hit # j = i
                Once we hit #, we have the length of the string. 
                Slice from j + 1 to j + 1 + length of string
                Push into the result array
                Start i again at the end of the length of the string.
        */

        let result = "";
        
        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const strLength = parseInt(str.slice(i, j));
            const start = j + 1;
            result.push(str.slice(start, start + strLength));
            i = start + strLength;
        }

        return result;
    }
}

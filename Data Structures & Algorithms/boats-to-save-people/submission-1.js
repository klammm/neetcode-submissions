class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        /*
        Approach: 

        [1,3,2,3,2]

        [1, 2, 2, 3, 3]

        Declare a count variable for number of boats

        Sort the array

        Declare two pointers i and j starting at both ends i = 0 j = people.length - 1

        iterate while i < j
            check if people[i] + people[j] <= limit
                true: increment count and move up i and move down j
            else people[i] + people[j] > limit
                true: decrement j and increment count
            else if people[i] + people[j] < limit
        return count;
        */
        let count = 0;
        const sortedArray = people.sort((a, b) => a - b);

        let i = 0;
        let j = people.length - 1;

        while (i <= j) {
            if (people[i] + people[j] <= limit) {
                i++;
                j--;
            } else {
                j--;
            }

            count++;
        }

        return count;
    }
}

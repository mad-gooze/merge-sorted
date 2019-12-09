/**
 * merge-sort
 * Merge two sorted arrays
 */


/**
 * Merged two sorted arrays in O(n) time and O(n) space.
 *
 * @remarks
 * Behavior is undefined when input-arrays are not already sorted.
 *
 * @param a One sorted array to be merged with `b`
 * @param b One sorted array to be merged with `a`
 * @param comparator Function used to sort elements of input arrays
 * @returns Sorted array containing all elements of `a` and `b`
 */
export default function mergesort<T>(
    a: T[],
    b: T[],
    comparator: (a: T, b: T) => number
): T[] {

    const merged: T[] = []

    let indexA = 0
    let indexB = 0
    let current = 0

    const combinedLength = a.length + b.length

    while (current < combinedLength) {

        const isArr1Depleted = indexA >= a.length
        const isArr2Depleted = indexB >= b.length

        if (!isArr1Depleted && isArr2Depleted || comparator(a[indexA], b[indexB]) < 0) {
            merged[current] = a[indexA]
            indexA++
        } else {
            merged[current] = b[indexB]
            indexB++
        }

        current++
    }

    return merged
}

export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;
    do {
        let middleIndexValue = Math.floor(low + (high - low)/2);
        let selectedNeedle = haystack[middleIndexValue];
        if(selectedNeedle === needle) {
            return true;
        } else if (selectedNeedle > needle) {
            high = middleIndexValue;
        } else {
            low = middleIndexValue + 1;
        }
    } while(low < high)
    return false;
}
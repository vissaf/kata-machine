export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;
    do {
        let midpoint = Math.floor(lo + (hi-lo)/2)
        let value = haystack[midpoint];
        if(value === needle) {
            return true;
        } else if (value > needle) {
            hi = midpoint;
        } else {
            lo = midpoint + 1;
        }
    } while (lo < hi);
    return false;
}
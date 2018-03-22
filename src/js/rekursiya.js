function showDigit(n) {
    console.log(n);
    return n > 0 ? showDigit(n-1) : 0;
}

showDigit(5);

export default showDigit;
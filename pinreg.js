//check if pin is valid. Pin should be exactly 4 or 6 ints only.
function reg(pin){

    return /^\d{4}$|^\d{6}$/.test(pin);

}

console.log(reg(1234));
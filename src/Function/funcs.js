export const randomSpecialChar = () => {
    const specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

export const randomLowercase = () => {
    // return only lowercase letters
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

export const randomUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

export const randomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


export const passwordOptions = (password) => {
    const optionsChecked = [password.lowercase, password.uppercase, password.numbers, password.symbols];
    const options = [randomLowercase, randomUppercase, randomNumber, randomSpecialChar];
    const optionsArray = [];
    optionsChecked.forEach((option, index) => {
        if (option) {
            optionsArray.push(options[index])
        }
    })
    return optionsArray;
}


export const formatNumbers = (number:string ) => {
        if(!number) return null;
        // Remove any non-numeric characters and the extension, if present
        const cleanedNumber = "+234" + number.replace(/\D/g, '').split('X')[0];
        // Randomly assign an operator prefix
        const operatorPrefixes = ["070", "080", "090"];
        const randomPrefix = operatorPrefixes[Math.floor(Math.random() * operatorPrefixes.length)];
        return `${randomPrefix}${cleanedNumber.slice(5, 8)}${cleanedNumber.slice(9, 11)}${cleanedNumber.slice(11, 14)}`;


}
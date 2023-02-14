// This file contains all the functions that are used to format the date


// return the date in the format of "Jan 1, 2021 12:00 AM"
export const formattedDate = (date: Date | number | string) => {
    const dates = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    const construct = new Intl.DateTimeFormat("en-US", options as any).format(dates).replace('at', '');
    const shortenMonth = construct.split(' ')[0].slice(0, 3) + ' ' + construct.split(' ')[1] + ' ' + construct.split(' ')[2] + ' ' + construct.split(' ')[3] + ' ' + construct.split(' ')[4] + ' ' + construct.split(' ')[5];
    return shortenMonth;
}


// check if the date is active or not (active means the date is within 1000 days from the current date)
export const checkActive = (date: Date | number | string) => {
    const currentDate = new Date();
    const dates = new Date(date);
    const diff = Math.abs(currentDate.getTime() - dates.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays <= 1000) {
        return true;
    }
    return false;
}

// return the date in the format of "Jan 1, 2021" , use this only for the date return from the users data
export const filteredDate = (date: Date | number | null) => {
    const dates = new Date(date as Date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",

    };
    const construct = new Intl.DateTimeFormat("en-US", options as any).format(dates)
    const shortenMonth = construct.split(' ')[0].slice(0, 3) + ' ' + construct.split(' ')[1] + ' ' + construct.split(' ')[2]
    return shortenMonth;
}

// return the date in the format of "Jan 1, 2021" , use this only for the date return from the filter form
export const filteredDate2 = (date: string) => {
    const splitted = date.split(' ')
    const shortenMonth = splitted[0] + ' ' + splitted[1] + ' ' + splitted[2]
    return shortenMonth;
}
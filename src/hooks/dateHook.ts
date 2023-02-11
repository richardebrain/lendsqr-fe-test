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
   const shortenMonth = construct.split(' ')[0].slice(0,3) + ' ' + construct.split(' ')[1] + ' ' + construct.split(' ')[2] + ' ' + construct.split(' ')[3] + ' ' + construct.split(' ')[4]+ ' ' + construct.split(' ')[5];
    return shortenMonth;
}

export const checkActive = (date: Date | number | string) => {
     const currentDate = new Date();
        const dates = new Date(date);
        const diff = Math.abs(currentDate.getTime() - dates.getTime());
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        if (diffDays <= 1000) {
            return 'Active';
        }
        return 'Inactive';
}
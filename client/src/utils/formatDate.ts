function formatDateCustom(dateString: string): string {
    const dateObj = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        // hour: '2-digit', 
        // minute: '2-digit', 
        // second: '2-digit', 
        // timeZoneName: 'short' 
    };
    return dateObj.toLocaleString('en-US', options);
}

export default formatDateCustom;
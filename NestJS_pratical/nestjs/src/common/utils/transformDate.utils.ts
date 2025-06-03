export const transformDate = (value: string): Date | null => {
    if (!value || typeof value !== 'string') {
        return null;
    }
    const parts = value.split('/');
    if (parts.length !== 3) {
        return null;
    }
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }
    const date = new Date(Date.UTC(year, month, day));
    if (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month &&
        date.getUTCDate() === day &&
        year > 1000 && year < 3000
    ) {
        return date;
    }
    return null;
}
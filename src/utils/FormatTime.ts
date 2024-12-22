

export const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60) + 9;
    const mins = minutes % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${mins.toString().padStart(2, '0')} ${ampm}`;
}
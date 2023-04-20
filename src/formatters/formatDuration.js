function formatDuration(durationInMinutes) {
    if (isNaN(durationInMinutes)) {
        return 'N/A';
    }
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes - (hours * 60);

    return `${hours > 0 ? `${hours}h ` : ''}${minutes}min`;
}

export { formatDuration }
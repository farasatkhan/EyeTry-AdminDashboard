const jsonDownloader = (data, filename) => {
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const createTempElement = document.createElement('a');
    createTempElement.href = url;
    createTempElement.download = filename;

    createTempElement.click();

    window.URL.revokeObjectURL(url);
};

export { jsonDownloader };
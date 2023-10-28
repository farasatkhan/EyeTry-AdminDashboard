const toDataURL = async (url) => {
    const response = await fetch(url);

    // console.log(response);

    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  
  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }
  
    return new File([u8arr], filename, { type: mime });
  };
  
  
export async function processImages(imageUrls) {

    const fileArr = [];

    for (const imageUrl of imageUrls) {
      try {
        const dataUrl = await toDataURL(imageUrl);
        const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        const fileData = dataURLtoFile(dataUrl, filename);
        fileArr.push(fileData);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    }

    return fileArr;
}
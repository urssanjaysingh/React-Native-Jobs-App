export const checkImageURL = (url) => {
    if (!url) {
        return false;
    }

    const imageExtensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'svg', 'tiff'];
    const pattern = new RegExp(`^https?://.+\\.(${imageExtensions.join('|')})$`, 'i');

    return pattern.test(url);
};

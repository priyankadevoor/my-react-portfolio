// Based on the path passed returns relative path so that in code it is easy to access
export const getImageURL = (path) => {
    return new URL (`/assets/${path}`, import.meta.url).href;
}
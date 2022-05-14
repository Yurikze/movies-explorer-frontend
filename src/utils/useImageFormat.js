export const useImageFormat = (image) => {
  const apiUrl = 'https://api.nomoreparties.co/'
  return apiUrl + image.url
}
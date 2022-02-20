
/**
 * @description use this method to resize image file and this will return original and resized image
 * @author jagannath 
 * @param base64 base64 image url
 * @param newWidth new image width 
 * @param newHeight new image height
 * @return {*} thumbnail url - string
 */
export const resizeBase64Img = (
  base64: string,
  newWidth: number,
  newHeight: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      var canvas = document.createElement('canvas')
      canvas.width = newWidth
      canvas.height = newHeight
      let context = canvas.getContext('2d')
      let img = document.createElement('img')
      img.src = base64
      img.onload = function () {
        context?.scale(newWidth / img.width, newHeight / img.height)
        context?.drawImage(img, 0, 0)
        resolve(canvas.toDataURL())
      }
    } catch (error) {
        reject(error)
    }
  })
}
 /**
 * @description use this method to resize image file and this will return original and resized image
 * @author jagannath 
 * @param file html file object (e.target.files[0])
 * @param width new image width 
 * @param height new image height
 * @return {*} {image: string, thumbnail: string} 
 */
  export const getThumbnailUrl = async(file: any, width: number, height: number) => {
  const base64 = URL.createObjectURL(file)
  let image = base64
  const result = await resizeBase64Img(base64, width, height)
  return {
    image,
    thumbnail: result
  }
}

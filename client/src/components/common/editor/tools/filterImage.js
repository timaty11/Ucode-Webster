const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export async function getFilteredImg(imageToFilter, filter) {
  const image = await createImage(imageToFilter);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const canvasWidth = image.width;
  const canvasHeight = image.height;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  context.drawImage(image, 0, 0, canvasWidth, canvasHeight);

  context.filter = filter.value.toString();

  context.drawImage(image, 0, 0, canvasWidth, canvasHeight);

  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      console.log(file);
      resolve(URL.createObjectURL(file));
    }, "image/jpeg");
  });
}

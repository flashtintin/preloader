export async function myLoader(images, callback) {
  let loaded = 0;
  const total = images.length;
  for (const [index, image] of images.entries()) {
    loaded = index + 1;
    try {
      await loadImage(image);
    } catch (e) {
      console.log(e);
    }
    callback((100 * loaded) / total);
  }
}

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      resolve();
    } else {
      img.onload = () => {
        resolve();
      };
      img.onerror = (e) => {
        reject(e);
      };
    }
  });

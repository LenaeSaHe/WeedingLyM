let loaded = 0;
export function getImages(images, onProgress, onComplete) {
  console.log("getImages", images.length);
  function showProgress() {}

  function loadNextImage(index) {
    if (index >= images.length) {
      console.log("All images loaded");
      onComplete();
      return;
    }
    console.log("loading image", index);
    fetchImage(images[index], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Image loaded",
          index + 1,
          images.length,
          Math.floor(((index + 1) / images.length) * 100)
        );
        loaded++;
        onProgress(Math.floor(((index + 1) / images.length) * 100));
      }
      loadNextImage(index + 1);
    });
  }

  loadNextImage(0);
}

function fetchImage(imageUrl, callback) {
  const req = new XMLHttpRequest();

  req.addEventListener("progress", updateProgress);
  req.addEventListener("load", transferComplete);
  req.addEventListener("error", transferFailed);
  req.addEventListener("abort", transferCanceled);

  // progress on transfers from the server to the client (downloads)
  function updateProgress(event) {
    console.log("The transfer is on progress.");
  }

  function transferComplete(evt) {
    console.log("The transfer is complete.");
    if (req.status === 200) {
      const img = new Image();
      loaded++;
      callback();
      img.onload = function () {};
    } else {
      callback(new Error("An error occurred while transferring the file."));
    }
  }

  function transferFailed(evt) {
    console.log("An error occurred while transferring the file.");
    callback(new Error("An error occurred while transferring the file."));
  }

  function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
    callback(new Error("An error occurred while transferring the file."));
  }
  req.open("GET", imageUrl);
  req.send();
}

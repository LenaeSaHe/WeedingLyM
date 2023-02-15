export async function preloadImages(images, onFinish, onChangeProgress) {
  const promises = images.map((image, index) =>
    fetchImage(image, onFinish, onChangeProgress, index, images.length)
  );
  console.log("Resources to preload", { promises });
  await prefetchResource(
    promises,
    images.length,
    1,
    onFinish,
    onChangeProgress
  );
  return "ok";
}

async function prefetchResource(
  promises,
  total,
  n,
  onFinish,
  onChangeProgress
) {
  if (promises.length === 0) {
    onFinish();
    return;
  }
  try {
    onChangeProgress(n / total);
    console.log("loading item", n, n / total);
    const res = await promises[0];
    console.log("Item", n, "completed");
    promises.shift();
    prefetchResource(promises, total, n + 1, onFinish, onChangeProgress);
  } catch (err) {
    console.error(err);
  }
}

function fetchImage(imageUrl, onFinish, onChangeProgress, index, total) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener("progress", updateProgress);
    req.addEventListener("load", transferComplete);
    req.addEventListener("error", transferFailed);
    req.addEventListener("abort", transferCanceled);

    // progress on transfers from the server to the client (downloads)
    function updateProgress(event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        if (Math.floor(percentComplete) % 10 === 0) {
        }
      } else {
        // Unable to compute progress information since the total size is unknown
      }
    }

    function transferComplete(evt) {
      console.log("The transfer is complete.");
      resolve();
    }

    function transferFailed(evt) {
      console.log("An error occurred while transferring the file.");
      reject();
    }

    function transferCanceled(evt) {
      console.log("The transfer has been canceled by the user.");
      reject();
    }
    req.open("GET", imageUrl);
    req.send();
  });
}

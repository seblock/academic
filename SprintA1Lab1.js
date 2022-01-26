// Grab DOM elements
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const takePhotoButton = document.querySelector("#takePhoto");

// Define functions
const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.log("Oh snap!", err);
    });
};

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Take pixels out
    let pixels = ctx.getImageData(0, 0, width, height); // Array of pixel rgba
    // Red effect
    // pixels = redEffect(pixels);

    // RGB Split
    // pixels = rgbSplit(pixels);

    // Green Screen
    pixels = greenScreen(pixels);

    // Put the altered pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
};

const takePhoto = () => {
  // Sound effect
  snap.currentTime = 0;
  snap.play();
  // Grab data for video screenshot
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="handsome">`;
  strip.insertBefore(link, strip.firstChild);
};

// Effects
const redEffect = (pixels) => {
  // Skipping over RGBA to the R
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // red
  }
  return pixels;
};

const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i]; // red
    pixels.data[i + 500] = pixels.data[i + 1]; // green
    pixels.data[i + 550] = pixels.data[i + 2]; // blue
  }
  return pixels;
};

const greenScreen = (pixels) => {
  const levels = {};
  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red >= levels.rmax &&
      green >= levels.gmax &&
      blue >= levels.bmax
    ) {
        pixels.data[i + 3] = 0;
    }
  }
  return pixels;
};

// Onrun
getVideo();
video.addEventListener("canplay", paintToCanvas);
takePhotoButton.addEventListener("click", takePhoto);

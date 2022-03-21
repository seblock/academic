const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => { 
    // Used ternary operator so that there will never be formating errors if null
    speed.textContent = data.coords.speed == null ? 0 : data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
}
);
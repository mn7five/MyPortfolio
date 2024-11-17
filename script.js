const BIRTH_DAY = "12-10-1815";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");      
setInterval(
  () => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000);
    const timeContainer = document.getElementById("time-container");
    timeContainer.innerText = intlNumberFormatter.format(difference);
  },
  1000
);

let photoClicked = false;
const photo = document.querySelector("img.portrait");
photo.addEventListener("click", () => {
    photoClicked = !photoClicked;
    photo.style.width = photoClicked ? "400px" : "300px";
});
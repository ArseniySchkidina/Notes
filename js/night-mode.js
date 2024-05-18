const dayBtn = document.querySelector("#sun");
const nightBtn = document.querySelector("#nightBtn");
const body = document.querySelector("body")
dayBtn.addEventListener("click", function () {
    body.classList.remove("night");
    nightBtn.classList.remove("active");
    this.classList.add("active");
});
nightBtn.addEventListener("click", function () {
    body.classList.add("night");
    nightBtn.classList.add("active");
    dayBtn.classList.remove("active");
});

















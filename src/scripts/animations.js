//selectors
const rulesBtn = document.querySelector(".rules")
const rulesBtnText = document.querySelector(".rules-btn")
const rulesPreview = document.querySelector(".rules-preview")
const closeBtn = document.querySelector(".rules-preview__close")

//event listeners
rulesBtnText.addEventListener("click", openMenu)
rulesBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)

//functions---(treba bit u ovom zapisu, jer kad bismo funkciju u varijablu stavili onda bi je trebali staviti prije event listenera)
function openMenu() {
  rulesPreview.classList.add("fade-in")
  rulesPreview.classList.remove("fade-out")
}

function closeMenu() {
  rulesPreview.classList.remove("fade-in")
  rulesPreview.classList.add("fade-out")
}

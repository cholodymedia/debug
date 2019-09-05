// prettier-ignore
const link = document.getElementsByClassName("link")[0].addEventListener("click", copy);

function copy() {
  // prettier-ignore
  var el = document.createElement('textarea');
  // prettier-ignore
  el.value = '<script src="https://cholodymedia.github.io/debug/debug.js" defer></script>';
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
  document.getElementsByClassName("link")[0].classList.add("copied");
  // prettier-ignore
  setTimeout(()=>{document.getElementsByClassName('info')[0].style.visibility = "visible";},100);
  // prettier-ignore
  setTimeout(()=>{document.getElementsByClassName('link')[0].classList.remove('copied');},500);
  // prettier-ignore
  setTimeout(()=>{document.getElementsByClassName('info')[0].style.visibility = "hidden";},600);
}

function scroll() {
  const id = document.getElementsByClassName("howto")[0];
  id.scrollIntoView();
}

// prettier-ignore
const scrol1 = document.getElementsByClassName("click-scroll")[0].addEventListener("click", scroll);
// prettier-ignore
const scrol2 = document.getElementsByClassName("click-scroll")[1].addEventListener("click", scroll);

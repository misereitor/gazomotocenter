const animationClass = "animate"
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

document.querySelectorAll(".produtos [data-anime]").forEach(element => console.log(element))

function animeScroll() {
    const windowTop = window.pageYOffset
    document.querySelectorAll("[data-anime]").forEach(element => {
        if ((windowTop) > element.offsetTop - ((window.innerHeight * 3) / 3)) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}
animeScroll()

window.addEventListener("scroll",debounce(()=>animeScroll(), 200))

document.addEventListener("DOMContentLoaded",()=>{document.querySelector("header > a").addEventListener("click",e=>{for(let t of(e.preventDefault(),document.body.querySelectorAll(".space-y-2 > .transition"))){let e=t.querySelector(".bg-custom-red");e&&e.remove(),t.classList.remove("dark:bg-blue-950"),t.classList.remove("bg-very-light-grayish-blue")}document.querySelector("header > div > span").innerText="0"})});
//# sourceMappingURL=index.76216e69.js.map
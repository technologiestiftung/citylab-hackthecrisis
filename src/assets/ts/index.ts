import { toggleIsActive } from "./lib/navbar";

// import { add } from "./lib/stub";
document.addEventListener("DOMContentLoaded", function() {
  toggleIsActive();
  // const navItems = document.querySelectorAll(".menu__navbar-items");
  // if (navItems !== null && navItems.length > 0) {
  //   // loop all items and remove is-active
  //   // only add to clicked
  //   navItems.forEach(item => {
  //     item.addEventListener("click", () => {
  //       for (const elem of Array.from(navItems)) {
  //         elem.classList.remove("is-active");
  //       }
  //       item.classList.add("is-active");
  //     });
  //   });
  // } else {
  //   throw new Error("Could not find navbar elements");
  // }
});

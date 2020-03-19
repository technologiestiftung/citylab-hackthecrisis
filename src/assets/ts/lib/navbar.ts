export function toggleIsActive(): void {
  const navItems = document.querySelectorAll(".menu__navbar-items");
  if (navItems !== null && navItems.length > 0) {
    // loop all items and remove is-active
    // only add to clicked
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        for (const elem of Array.from(navItems)) {
          elem.classList.remove("is-active");
        }
        item.classList.add("is-active");
      });
    });
  } else {
    throw new Error("Could not find navbar elements");
  }
}

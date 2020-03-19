import { toggleIsActive } from "../lib/navbar";
import { getByText, fireEvent, getAllByTestId } from "@testing-library/dom";

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = "";
});

function setupMenu(): HTMLDivElement {
  const menu = document.createElement("div");
  const items = [1, 2, 3, 4].map(i => {
    const anchor = document.createElement("a");
    anchor.classList.add("menu__navbar-items", "navbar-item");
    anchor.id = `navbar-item-${i}`;
    anchor.setAttribute("data-testid", `test-${i}`);
    anchor.textContent = `${i}`;
    return anchor;
  });
  for (const item of items) {
    menu.appendChild(item);
  }
  document.body.appendChild(menu);
  return menu;
}

describe("navbar", () => {
  test("should add class is-active to clicked item", () => {
    const menu = setupMenu();
    toggleIsActive();
    const anchor = getByText(menu, "1");
    const allAnchros = getAllByTestId(menu, /test-\d/);
    fireEvent.click(anchor);
    expect(anchor).toHaveClass("is-active");
    for (const a of allAnchros) {
      if (a.textContent !== "1") {
        expect(a).not.toHaveClass("is-active");
      }
    }
  });

  test("should throw error due to missing menu", () => {
    expect(() => {
      toggleIsActive();
    }).toThrow();
  });
});

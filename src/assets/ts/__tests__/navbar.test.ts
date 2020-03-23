import { toggleIsActive, closeMenuAfterClick } from "../lib/navbar";
import {
  getByText,
  fireEvent,
  getAllByTestId,
  getByTestId
} from "@testing-library/dom";

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = "";
});

function setupMenu(): HTMLDivElement {
  const menu = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "navbar-burger-toggle";
  checkBox.checked = false;
  checkBox.setAttribute("data-testid", "checkbox");
  menu.appendChild(checkBox);

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
  test("should uncheck checkbox after click", () => {
    const menu = setupMenu();
    const checkBox = getByTestId(menu, /checkbox/) as HTMLInputElement;
    checkBox.checked = true;
    const allAnchros = getAllByTestId(menu, /test-\d/);
    closeMenuAfterClick();
    fireEvent.click(allAnchros[0]);
    expect(checkBox.checked).toBe(false);
  });
  test("should throw due to missing navbar items", () => {
    const menu = setupMenu();
    const allAnchros = getAllByTestId(menu, /test-\d/);
    allAnchros.forEach(item => {
      item.remove();
    });
    expect(() => {
      closeMenuAfterClick();
    }).toThrow();
  });
  test("should throw due to missing checkbox items", () => {
    const menu = setupMenu();
    const checkBox = getByTestId(menu, /checkbox/) as HTMLInputElement;
    checkBox.remove();
    expect(() => {
      closeMenuAfterClick();
    }).toThrow();
  });
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

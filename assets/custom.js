class DropdownMenu extends HTMLElement {
    constructor() {
      super();
      this.initDropdown();
    }

    initDropdown() {
      this.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          let submenu = item.querySelector(".dropdown-level-2");
          if (submenu) {
            submenu.style.opacity = "1";
            submenu.style.transform = "translateY(0)";
            submenu.style.visibility = "visible";
          }
        });

        item.addEventListener("mouseleave", () => {
          let submenu = item.querySelector(".dropdown-level-2");
          let icon = item.querySelector(".icon-caret");
          if (submenu) {
            submenu.style.opacity = "0";
            submenu.style.transform = "translateY(-10px)";
            submenu.style.visibility = "hidden";
          }
        });
      });
    }
  }

  customElements.define('custom-dropdown-menu', DropdownMenu);
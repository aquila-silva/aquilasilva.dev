document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-navigation");
  const header = document.querySelector(".site-header");

  /*
   * MENU MOBILE
   */
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-active", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu",
      );
    });

    /*
     * Fecha o menu após clicar em um link
     */
    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuToggle.classList.remove("is-active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  /*
   * HEADER AO ROLAR A PÁGINA
   */
  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });

    updateHeader();
  }

  /*
   * FECHA O MENU COM A TECLA ESC
   */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation?.classList.contains("is-open")) {
      navigation.classList.remove("is-open");
      menuToggle?.classList.remove("is-active");

      menuToggle?.setAttribute("aria-expanded", "false");

      menuToggle?.setAttribute("aria-label", "Abrir menu");

      menuToggle?.focus();
    }
  });
});

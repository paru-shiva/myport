export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight ?? 0;
    const targetY =
      el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }
}

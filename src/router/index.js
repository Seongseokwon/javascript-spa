export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.navigateTo = this.navigateTo.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    window.addEventListener("popstate", this.handlePopState);
    document.addEventListener("DOMContentLoaded", async () => {
      if (window.location.pathname === "/index.html") {
        window.history.replaceState(null, null, "/");
      }

      await this.handlePopState();

      document.body.addEventListener("click", (event) => {
        if (event.target.matches("[data-link]")) {
          event.preventDefault();
          this.navigateTo(event.target.href);
        }
      });
    });
  }

  currentView = null;

  async navigateTo(url) {
    // 이동 하려는 페이지와 현재페이지가 같다면 무시
    if (url === window.location.pathname) return;

    history.pushState(null, null, url);
    await this.handlePopState();
  }

  async handlePopState() {
    const path = window.location.pathname;
    const route = this.routes.find((route) => route.path === path);

    if (route) {
      const view = new route.view();
      const content = await view.getHtml();

      if (this.currentView) {
        this.currentView.unmounted();
      }
      this.currentView = view;

      document.querySelector("#app").innerHTML = content;
      view.mounted();
    }
  }
}

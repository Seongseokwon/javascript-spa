import BaseView from "../../../lib/views/BaseView.js";

export default class HomeView extends BaseView {
  constructor() {
    super();
    this.title = "홈";
  }

  getHtml() {
    return `
            <h1>${this.title}</h1>
            <p>이 페이지는 홈입니다.</p>
        `;
  }
}

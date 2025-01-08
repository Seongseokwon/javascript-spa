import BaseView from "../../../lib/views/BaseView.js";

export default class Contact extends BaseView {
  constructor() {
    super();
    this.title = "Contact";
  }

  getHtml() {
    return `
            <h1>${this.title}</h1>
            <p>이 페이지는 Contact입니다.</p>
        `;
  }
}

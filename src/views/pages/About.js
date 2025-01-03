import BaseView from "../common/BaseView.js";

export default class About extends BaseView {
  constructor() {
    super();
    this.title = "About";
    this.content = "hello";
  }

  mounted() {
    window.AboutView = this;
  }

  unmounted() {
    console.log("About unmounted");
  }

  changeInput(e) {
    e.stopPropagation();
    console.log(e.target.value);
    this.content = e.target.value;
  }

  getHtml() {
    return `
            <h1>${this.title}</h1>
            <h2>${this.content}</h2>
            <input oninput="AboutView.changeInput(event)"/>
            <p>이 페이지는 About입니다.</p>
        `;
  }
}

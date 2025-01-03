import Router from "./router/index.js";
import About from "./views/pages/About.js";
import Contact from "./views/pages/Contact.js";
import Home from "./views/pages/Home.js";

const router = new Router([
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/contact", view: Contact },
]);

console.log(this);

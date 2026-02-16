import { w as head, x as slot } from "../../chunks/index2.js";
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>RecipeHub</title>`);
    });
    $$renderer2.push(`<link rel="icon" href="/favicon.png"/>`);
  });
  $$renderer.push(`<div class="app"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
export {
  _layout as default
};

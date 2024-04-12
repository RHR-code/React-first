let container = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function customRender(reactEl, container) {
  //   let dom = document.createElement(reactElement.type);
  //   dom.innerHTML = reactElement.children;

  //   dom.setAttribute("href", reactElement.props.href);
  //   dom.setAttribute("target", reactElement.props.target);
  //   container.appendChild(dom);

  let dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    dom.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(dom);
}

customRender(reactElement, container);

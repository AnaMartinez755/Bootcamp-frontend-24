class MyTag extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
    this.initComponent();
  }
  mapComponentAttributes() {
    const titleAttribute = this.getAttribute("title");
    if (titleAttribute) {
      // Do something with the title attribute
    }
  }
}
export default MyTag;

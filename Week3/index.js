const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="index.css">
  <div class="main-container">
          <div class="first-container">
          TORNADO DRAGON
          </div>
          <div class="second-container">
          <img src="start.png">
          <img src="start.png">
          <img src="start.png">
          <img src="start.png">
          </div>
          <div class="third-container">
          <img src="dragon.jpg">
          </div>
          <div class="fourth-container">
              <div class="fourth-container-1">
              <b>[WYRM/XYZ/EFFECT]</b><br/>
              2 Level 4 monsters<br/>
              Once per turn (Quick Effect): You can detach 1 material from this <br/>
              card, then target 1 Spell/Trap on the field; destroy it.
              </div>
              <div class="fourth-container-2">
              <b>ATK/2100 DEF/2000</b>
              </div>
          </div>
  </div>
`;

class CardItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("card-item", CardItem);

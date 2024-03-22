const template = document.createElement("template");
template.innerHTML = `
<style>
  .div3 {
    width: 30px;
    height: 30px;
  }
  .main-div {
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
    width:100%;
    height:100vh;
  }
  .card-container{
    border:solid;
    border-color: black;
    display:flex;
    flex-direction:column;
  }
  .div1{
    background-color: white;
  }
  .div2{
    padding:10px;
    background-color: black;
  }
</style>
<div class="main-div">
  <div class = "card-container">  
    <div class="div1">
      <h1>JalaSoft</h1>
    </div>
    <div class="div2">
      <img src="./imiage.jpg" width="300px" height="300px">
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

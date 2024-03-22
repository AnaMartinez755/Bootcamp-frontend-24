const template = document.createElement("template");
template.innerHTML = `
<style>
  h2,h3{
    color:white;
  }
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
    padding:20px;
    background-color: black;
  }
  .image{
    border-radius:50px
  }
  .name-container{
    justify-content: center;
    display:flex;
    background-color: black;
  }
  .ocu-container{
    justify-content: center;
    display:flex;
    background-color: red;
  }
</style>
<div class="main-div">
  <div class = "card-container">  
    <div class="div1">
      <h1>JalaSoft</h1>
    </div>
    <div class="div2">
      <img class="image" src="./imiage.jpg" width="200px" height="200px">
  </div>
  <div class="name-container">
    <h2>
      Rapunzel
    </h2>
  </div>
  <div class="ocu-container">
  <h3>
    Developer
  </h3>
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

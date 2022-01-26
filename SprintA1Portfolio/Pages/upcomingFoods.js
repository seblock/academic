const template = document.createElement('template');

template.innerHTML = `
<style>
.food-card h4 {
    margin: 0;
}
.food-card > li {
    margin: 0;
}
.food-card > ul {
  margin: 0;
}
.details {
  margin: 0;
}
</style>
<div class="food-card">
  <div>
    <h4></h4>
    <ul class="details">
      <li><slot name="quality"/></li>
      <li><slot name="price"/></li>
    </ul>
  </div>
</div>`;

class FoodCard extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h4').innerText = `${this.getAttribute('name')}`;
 } 

 connectedCallback(){
     this.h4 = `${this.getAttribute('name')}`;
   this.render();
 }

 render(){
   this.h4;
 }
}
window.customElements.define('food-card', FoodCard);
const template = document.createElement('template');

template.innerHTML = `
<style>
.animal-card h3 {
    margin: 0;
}
.animal-card p {
    margin: 0;
}
</style>
<div class="animal-card">
  <div>
    <h3></h3>
    <div class="details">
      <p><slot name="age"/></p>
      <p><slot name="weight"/></p>
      <p><slot name="gender"/></p>
      <p><slot name="isPregnant"/></p>
    </div>
  </div>
</div>`;

class AnimalCard extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h3').innerText = `${this.getAttribute('name')} the ${this.getAttribute('type')}`;
 } 

 connectedCallback(){
     this.h3 = `${this.getAttribute('name')} the ${this.getAttribute('type')}`;
   this.render();
 }

 render(){
   this.h3;
 }
}
window.customElements.define('animal-card', AnimalCard);
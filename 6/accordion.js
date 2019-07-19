class Accordion{
  constructor(selector, multiple=true){ 
    this.accordion = document.querySelector(selector);
    this.multiple = multiple;
    this.bindEvents();
  }

  bindEvents(){
    this.accordion.querySelectorAll(".element .question").forEach(elementQuestion =>{

      elementQuestion.addEventListener("click",()=>{
        let item = elementQuestion.parentNode;
        this.validateMultiple(item);
        item.classList.toggle("active");
      })

    });
  }
  validateMultiple(selectedItem){
    if(this.multiple) return;

    this.accordion.querySelectorAll(".element").forEach(item => {
      if(selectedItem == item) return;
      item.classList.remove("active");
    })
  
  }
}

// Inicializamos el script

(function(){
  new Accordion(".accordion")
})()
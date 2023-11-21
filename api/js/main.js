import {today} from  "./api.js" 
import { filter } from "./api.js";
const domselectors = {
  wrapper : document.querySelector(".flex-wrapper"),
  form : document.querySelector("#form"),
  yearinput : document.querySelector("#year"),
  monthinput : document.querySelector("#month"),
  dayinput : document.querySelector("#day"),
}

function cards(x) {
  const rendered = []
  x.forEach((holiday) => {
    if (!rendered.includes(holiday.name)) {
      rendered.push(holiday.name);
      domselectors.wrapper.insertAdjacentHTML(
        "afterbegin", 
        `<div class="card">
          <div class="card-content">
            <h2>${holiday.name}</h2> 
            <p>${holiday.description}</p>
          </div>
        </div>`
      ); 
    }
  });

  console.log("it ran");
}


domselectors.form.addEventListener('submit', function(event) { 
    event.preventDefault();
    while (domselectors.wrapper.firstChild) {
        domselectors.wrapper.removeChild(domselectors.wrapper.lastChild);
      }
    const year = domselectors.yearinput.value
    const month = domselectors.monthinput.value
    const day = domselectors.dayinput.value
    filter(year, month, day, cards)
}
    );
document.addEventListener('DOMContentLoaded', today(cards))
import {today} from  "./api.js" 
const domselectors = {
  wrapper : document.querySelector(".flex-wrapper"),
}
today()

function cards(x){
  x.forEach((holiday)=>domselectors.wrapper.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
          <div class="card-content">
              <h2>
                  ${holiday.name}
              </h2>
              <p>
                  ${holiday.description}
              </p>

          </div>
      </div>`
    ));
    console.log("it ran")
    }



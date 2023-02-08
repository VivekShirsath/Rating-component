"use strict";

const component = document.querySelector(".component");
const ratings = document.querySelector(".component_ratings");
const ratingValue = document.querySelectorAll(".component_ratings-value")
const submitButton = document.querySelector(".component_submit");
const afterSubmit = document.querySelector(".afterSubmit");
const afterSubmitScore = document.querySelector(".afterSubmit_score");

let value = 0;

ratings.addEventListener("click",(e) =>
{
   let check = e.target.closest(".component_ratings-value");
   console.log(check);
   if(!check)
    return;


    for(let classNames of ratingValue){
        classNames.classList.remove("clicked");
    }
     value = e.target.innerText;
    console.log(value);
    e.target.classList.add("clicked");
});

submitButton.addEventListener("click",()=>
{
   if(!value)
   return;

  component.style.display = "none";
  afterSubmitScore.innerText = value;
  afterSubmit.style.display = "block";

})
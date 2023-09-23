const ratingsEls = document.querySelectorAll(".ratings")
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");

let selectedRating = "";
ratingsEls.forEach((ratingsEl)=>{
    ratingsEl.addEventListener("click", (event)=>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", ()=>{
    if(selectedRating!==""){
containerEl.innerHTML = `<strong>Thank you!</strong>
<br><br>
<strong>Feedback: ${selectedRating}</strong>
<p class="text">Thank you, We will use your feedback to improve our customer support!</p>
`
    }
})
function removeActive(){
    ratingsEls.forEach((ratingsEl)=>{
        ratingsEl.classList.remove("active")
    })
}

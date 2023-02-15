
document.addEventListener("DOMContentLoaded", (e) => {
//request data from server to get all ramen objects
fetch("http://localhost:3000/ramens")
.then(r => r.json())
.then(ramenArray => {
    console.log(ramenArray)
    ramenArray.forEach(element => {
        console.log(element)  
    const image = document.createElement("img")
    image.src = element.image
    document.getElementById("ramen-menu").appendChild(image)
    
 populateSpace (image, element)
})
})
}) 
function populateSpace(image, element) {
image.addEventListener("click", (e) => {
console.log(element)
let foo = document.querySelector(".detail-image")
foo.src = element.image
let name = document.querySelector(".name")
name.textContent = element.name
let restaurant = document.querySelector(".restaurant")
restaurant.textContent = element.restaurant
})
}



// See all ramen images in the div with the id of ramen-menu.
 //display the image for each of the ramen using an img tag inside the #ramen-menu div.







//    Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

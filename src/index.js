

//request data from server to get all ramen objects
fetch("http://localhost:3000/ramens")
.then(r => r.json())
.then(data => {
    console.log(data)
   data.forEach(data => console.log(data))
   renderRamen(data)
})


function renderRamen(data) {
const container = document.querySelector("#ramen-detail")
const image = document.querySelector("#ramen-detail > img")
const h2 = document.querySelector("#ramen-detail > h2")
const h3 = document.querySelector("#ramen-detail > h3")

}


//add img tag to "ramen-menu" div
const image = document.createElement("img");
const element = document.getElementById("ramen-menu")
element.appendChild(image)

const myImage = document.getElementById("ramen-detail")
element.appendChild(image).style.display = image





// const myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
// document.body.appendChild(myImage);
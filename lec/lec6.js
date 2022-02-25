// var obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function () {
//       console.log(this.i, this);
//     },
//   };
  
//   obj.b(); // prints undefined, Window {...} (or the global object)
//   obj.c();
console.log("Hello World!");
var photoElement = document.getElementById("apod");
var title = document.getElementById("title");
var body = document.getElementById("body");

fetch("https://api.nasa.gov/planetary/apod?api_key=bgaNXgDacFDiBOedbrCqNBgzWB3VveVKD91zNVii")
// first then is to fetch the data API from NASA and turn it into a json
.then(
  (response) => response.json())
  .then(
    // parameter for arrow function 
    (data) => {
      console.log(data)
      photoElement.setAttribute("src", data.url)
      title.innerHTML = data.title;
      body.innerHTML = data.explanation;
    } 
);

// Another fetch request
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
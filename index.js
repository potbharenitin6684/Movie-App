  
let div=document.createElement('div');  
  let movies_div = document.getElementById("movies");
  let id; 
    async function main() {
    try {
      let query = document.getElementById("query").value;
     //console.log("query :", query);

      let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=4be55597&S=${query}`);

      let data = await res.json();
      console.log(data);
      let actual_data = data.Search;
       //console.log("actual_data :", actual_data);

      if (actual_data != undefined) {
        appendMovies(actual_data);
      }else{
       appendnullData();
      }
    } catch (err) {
      console.log("err:", err);
    }
  }
function appendMovies(data) {
  movies_div.innerHTML = null;    
  data.forEach(function (el) {
   
    let div=document.createElement('div');
    let img = document.createElement("img");
    img.src = el.Poster;
   
    let title = document.createElement("h2");
    title.innerText = el.Title;

    let year=document.createElement("p");
    year.innerText="Year : "+el.Year; 

    let type=document.createElement("p");
    type.textContent="Type : "+el.Type;

   div.append(img, title,year,type);
   movies_div.append(div);
 });
}

function appendnullData(){
  movies_div.innerHTML = null;
  let img = document.createElement("img");
    img.src="https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif";
    img.style.marginLeft="100px"; 
    img.style.width="1000px";
    img.style.border="thin solid red";
    movies_div.append(img);

}

function debounce(func, delay) {
  if (id) {
    clearTimeout();
  }

  id = setTimeout(function () {
   func();
  }, delay);
}

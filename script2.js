let flag = 0;
function controller(x) {
  flag = flag + x;
  slideShow(flag);
}
slideShow(flag);
function slideShow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
    slides[num].style.display = "block";
  }
 
}
let api = "https://www.omdbapi.com/?apikey=28462748&t=";
let title = document.getElementById("title");
let director = document.getElementById("Director");
let actors = document.getElementById("actors");
let collection = document.getElementById("collection");
let desc = document.getElementById("Desc");
let award = document.getElementById("awards");
let writer = document.getElementById("writer");
let rating = document.getElementById("ratings");
let genre = document.getElementById("genre");
let date = document.getElementById("date");
let poster = document.getElementById("poster");
function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;
  let main = document.getElementById("main");
  let text = document.getElementById("text");
  let slider = document.getElementById("slider");

  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.Title == undefined) {
        text.innerText = "No Result Found";
        text.style.cssText = "font-size:25px";
        main.style.cssText = "display:none";
        slider.style.cssText = "display:none";
      } else {
        main.style.cssText = "display:block;";
        text.innerText = "";
        text.style.cssText = "dispaly:none";
        slider.style.cssText = "display:none";
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      }
    });
}
window.addEventListener("keydown", check);
function check(event) {
  if (event.key == "Enter") {
    searchMovie();
  }
}

let x = 0;

function redirect() {
  localStorage.setItem("x", 1);
  location.href = "index4.html";
}

function redirect2() {
  localStorage.setItem("x", 2);
  location.href = "index4.html";
}
function redirect3() {
  localStorage.setItem("x", 3);
  location.href = "index4.html";
}
function redirect4() {
  localStorage.setItem("x", 4);
  location.href = "index4.html";
}
function redirect5() {
  localStorage.setItem("x", 5);
  location.href = "index4.html";
}
function redirect6() {
  localStorage.setItem("x", 6);
  location.href = "index4.html";
}
function redirect7() {
  localStorage.setItem("x", 7);
  location.href = "index4.html";
}
function redirect8() {
  localStorage.setItem("x", 8);
  location.href = "index4.html";
}
function redirect9() {
  localStorage.setItem("x", 9);
  location.href = "index4.html";
}
function redirect10() {
  localStorage.setItem("x", 10);
  location.href = "index4.html";
}

function show() {
  let z = localStorage.getItem("x");
  if (z == 1) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=3 idiots")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 2) {
    fetch(
      "https://www.omdbapi.com/?apikey=28462748&t=mission impossible fallout"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 3) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=dark")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 4) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=pathaan")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 5) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=jawan")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 6) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=rocketry")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 7) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=oppenheimer")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 8) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=gravity")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else if (z == 9) {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=like stars on earth")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  } else {
    fetch("https://www.omdbapi.com/?apikey=28462748&t=the dark knight")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      });
  }
}
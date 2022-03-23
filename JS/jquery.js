const song_wrapper = document.getElementsByClassName("song-wrapper");
const songJSON = "song.json";


/* ---------------------------------  JQUERY CODE  ------------------------ */
$(function () {
   setTimeout(() => {
      $(".loadingio-spinner-eclipse-rjtqitvukue").css("display", "none");
      $(".body-wrapper").css("display", "flex");
   }, 500);
   $(".fa-gear").click(function (e) {
      e.preventDefault();
      console.log("clicked");
      $(".fa-gear").css({ display: "none" });
      $(".content-wrapper").css({ display: "none" });
      $("#settings").css({ display: "block" });
   });

   /* ----------  using fetch to get data ---------------- */

   /* -----------  GLOBAL VARIABLES  --------------------- */

   /* --------- fetching data to add to local storage -- */
   fetch(songJSON)
      .then((res) => res.json())
      .then((data) => {
         localStorage.setItem("myStorage", JSON.stringify(data));
         let src;
         // console.log(data);
         data.variables.forEach((e) => {
            const { artist_image } = e;
            src = artist_image;
            // console.log(artist_image);
         });
         console.log($('#artist_cover').attr(src));
         $("#artist_cover").attr("src", src);
      });
});

/* --------------------  CREATING THE SONG LISTING  -------------- */
const songContent = document.getElementById('song-content');
fetch(songJSON)
   .then((res) => res.json())
   .then((data) => {
      // console.log(data);
      data.variables.forEach((e) => {
         const span = document.createElement("span");
         const img = document.createElement("img");
         const div = document.createElement("div");
         const h3 = document.createElement("h3");
         const span1 = document.createElement("span");
         $(songContent + span).addClass("song-wrapper  animate__animated animate__slow animate__flipInX");
         div.setAttribute("id", "overlay");
         img.setAttribute("src", "img");
         div.innerHTML = 0
         h3.innerHTML = 'love intiti'

         span.appendChild(img)
         span.appendChild(div)
         span.appendChild(h3)
         span.appendChild(span1)
         songContent.appendChild(span)


      });
   });
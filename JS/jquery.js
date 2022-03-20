const song_wrapper = document.getElementsByClassName("song-wrapper");


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
   const songJSON = "song.json";

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

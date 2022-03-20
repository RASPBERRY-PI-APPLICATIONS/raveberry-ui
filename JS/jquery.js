$(function () {
   $(".fa-gear").click(function (e) {
      e.preventDefault();
      console.log("clicked");
      $(".fa-gear").css({ display: "none" });
      $(".content-wrapper").css({ display: "none" });
      $("#settings").css({ display: "block" });
   });

   
});

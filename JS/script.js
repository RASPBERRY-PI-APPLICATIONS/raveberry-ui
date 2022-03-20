fetch("data.json")
   .then((res) => res.json())
   .then((data) => localStorage.setItem("myStorage", JSON.stringify(data)));

   const song_wrapper = document.getElementsByClassName("song-wrapper");

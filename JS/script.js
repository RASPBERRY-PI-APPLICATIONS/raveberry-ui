fetch("data.json")
   .then((res) => res.json())
   .then((data) => localStorage.setItem("myStorage", JSON.stringify(data)));

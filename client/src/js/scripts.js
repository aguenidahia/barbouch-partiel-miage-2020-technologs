const handleTrouverGenre = (e) => {
  //e.preventDefault();
  console.log("fonction lancée!");

  axios({
    method: "get",
    url: `http://0.0.0.0:3000/jeux`,
  })
    .then((res) => {
      //console.log(res);
      if (res.data.errors) {
        var d = document.createElement("div");
        d.innerHTML = "error";
      } else {
        // window.location = "/";
        console.log("trouvé");
        var d = document.createElement("div");
        d.innerHTML = "trouvé";
      }
    })
    .catch((err) => {
      console.log(err);
    });
    
  return false;
};

const handleTrouverGenre = async (e) => {
  //e.preventDefault();
  console.log("fonction lancée!");

  await axios({
    method: "get",
    url: `http://0.0.0.0:4235/jeux`,
    withCredentials: true,
  })
  .then((res) => {
    //console.log(res);
    if (res.data.errors) {
      var d = document.createElement("div");
      d.innerHTML = "error";
      console.log("erreur");
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

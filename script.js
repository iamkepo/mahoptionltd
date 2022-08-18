const send = () => {
  window.preventDefault();
  let data = {
    nom: document.querySelector(".nom"),
    email: document.querySelector(".email")
  };
  for (const key in data) {
    if (data[key] === "") {
      alert("Le champ "+key+" est vide");
      return;
    }
  }
  // setnom("");
  // setemail("");
  // setmessage("");
  //alert(JSON.stringify(data))
  alert("Désolé votre message ne peut être envoyer actuellement")
}

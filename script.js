const send = () => {
  let data = {
    nom: document.querySelector(".nom").value,
    email: document.querySelector(".email").value
  };
  for (const key in data) {
    if (data[key] === "") {
      alert("Le champ "+key+" est vide");
      return;
    }
  }
  alert(JSON.stringify(data))
  //alert("Désolé votre message ne peut être envoyer actuellement")
}
document.querySelector(".btn").onclick = function (event) {
  event.preventDefault();
  send();
}
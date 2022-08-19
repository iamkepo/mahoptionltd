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
  axios({
    method: "post",
    url: 'https://zappe.herokuapp.com/api/public/stock/post', 
    data: {
      data: data,
      table: "mails"
    }})
  .then((response) => {
    alert(response.data.message);
  })
  .catch((err) => {
    alert("Erreur de connexion");
  });
  document.querySelector(".nom").value = "";
  document.querySelector(".email").value = "";
}
document.querySelector(".btn").onclick = function (event) {
  event.preventDefault();
  send();
}
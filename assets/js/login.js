function signup(e, formEl) {
  e.preventDefault();

  // Récupération des données saisie par l'utilisateur dans le HTML
  // Ici mettre les bons selecteurs HTML (vous n'aurez probablement pas les même que moi)
  let username = document.querySelector("#signupUsernameInput").value;
  let email = document.querySelector("#signUpEmailInput").value;
  let password = document.querySelector("#signUpPasswordInput").value;
  let type = document.querySelector("#signUptypeInput").value;

  let data = {
    username: username, // Ici le username saisi par l'utilisateur
    email : email,
    password: password,// Ici le mot de passe saisi par l'utilisateur
    type : type
  };
  console.log(data)
  // fetch(url) va faire une requete vers l'URL passé en paramètre
  // C'est le chemin vers votre backend
  fetch("http://localhost:5000/api/user/signup", {
    method: "POST", // Type de requête (ici POST car on ENVOIE quelque chose)
    body: JSON.stringify(data), // Contenu de la requete
    headers: {
      // Entête de la requête important, à ne pas oublier
      "Content-Type": "application/json",
    },
  }).then((res) => {
    // Quand on à recu une réponse à notre requête
    res.json().then((json) => {
      // On transforme la réponse en JSON et quand c'est terminé
      console.log(json); // On affiche ce qu'on à récupéré dans la console
    });
  });
}

function login(e) {
  e.preventDefault();

  let username = document.querySelector("#UsernameInput").value;
  let password = document.querySelector("#PasswordInput").value;

  let data = {
    username: username,
    password: password,
  };
  fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((json) => {
      console.log(json);

      // On stock le jeton sous forme de cookie dans le navigateur
      setCookie("token", json.token, 24);

      // On redirige l'utilisateur sur la page d'accueil
      window.location.href = "index.html";
    });
  });
}

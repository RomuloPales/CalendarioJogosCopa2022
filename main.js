function listGames(time1, hour, time2) {
  return `
               <li> 
                <img src="./assets/icon=${time1}.svg" alt="bandeira${time1}">                
                <strong>${hour}</strong>
                <img src="./assets/icon=${time2}.svg" alt="bandeira${time2}">
                
                </li>
               <div class="foot" > 
               <h1> ${time1} </h1>  
                <h3> X </h3>
                <h1>${time2}</h1></div>
            `
}

function corNova(){
  document.querySelector("body").classList.remove("green")
  document.querySelector("body").classList.add("blue")
  console.log(body)
}
function corNova2(){
  document.querySelector("body").classList.remove("blue")
  document.querySelector("body").classList.add("green")
}
function corPadrao(){
  document.querySelector("body").classList.remove("green")
  document.querySelector("body").classList.remove("blue")
  
}

let delay = -0.2;
function criarCard(date, day, games) {
  delay += 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
     <h2>${date} <span>${day}</span></h2>
     <ul>
     ${games} 
     </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
    <img class="logo" src="./assets/logo.svg" alt="logoNlw">
    <button class="padrao" onclick="corPadrao()"></button>  
    <button class="verde" onclick="corNova2()"></button>  
    <button class="azul" onclick="corNova()"></button>
</header>
<main id="cards">
    ${criarCard("20/11", "Domingo", listGames("qatar", "13:00", "ecuador"))}
    ${criarCard(
      "21/11",
      "Segunda",
        listGames("england", "10:00", "iran") +
        listGames("senegal", "13:00", "netherlands") +
        listGames("united states", "16:00", "wales")
    )}
    ${criarCard(
      "22/11",
      "Terça",
         listGames("argentina", "07:00", "saudi arabia") +
        listGames("denmark", "10:00", "tunisia") +
        listGames("mexico", "13:00", "poland") +
        listGames("france", "16:00", "australia")
    )}
    ${criarCard(
      "23/11",
      "Quarta",
        listGames("morocco", "07:00", "croatia") +
        listGames("germany", "10:00", "japan") +
        listGames("spain", "13:00", "costa rica") +
        listGames("belgium", "16:00", "canada")
    )}
    ${criarCard(
      "24/11",
      "Quinta",
        listGames("switzerland", "07:00", "cameroon") +
        listGames("uruguay", "10:00", "south korea") +
        listGames("portugal", "13:00", "ghana") +
        listGames("brazil", "16:00", "serbia")
    )}
    ${criarCard(
      "25/11",
      "Sexta",
        listGames("wales", "07:00", "iran") +
        listGames("qatar", "10:00", "senegal") +
        listGames("netherlands", "13:00", "ecuador") +
        listGames("england", "16:00", "united states")
    )}
    ${criarCard(
        "26/11",
        "Sabado",
          listGames("tunisia", "07:00", "australia") +
          listGames("poland", "10:00", "saudi arabia") +
          listGames("france", "13:00", "denmark") +
          listGames("argentina", "16:00", "mexico")
      )}
      ${criarCard(
        "27/11",
        "Domingo",
          listGames("japan", "07:00", "costa rica") +
          listGames("belgium", "10:00", "morocco") +
          listGames("croatia", "13:00", "canada") +
          listGames("spain", "16:00", "germany")
      )}
      ${criarCard(
        "28/11",
        "Segunda",
          listGames("cameroon", "07:00", "serbia") +
          listGames("south korea", "10:00", "ghana") +
          listGames("brazil", "13:00", "switzerland") +
          listGames("portugal", "16:00", "uruguay")
      )}
      ${criarCard(
        "29/11",
        "Terça",
          listGames("ecuador", "12:00", "senegal") +
          listGames("netherlands", "12:00", "qatar") +
          listGames("iran", "16:00", "united states") +
          listGames("wales", "16:00", "england")
      )}
      ${criarCard(
        "30/11",
        "Quarta",
          listGames("tunisia", "12:00", "france") +
          listGames("australia", "12:00", "denmark") +
          listGames("poland", "16:00", "argentina") +
          listGames("saudi arabia", "16:00", "mexico")
      )}
      ${criarCard(
        "01/12",
        "Quinta",
          listGames("croatia", "12:00", "belgium") +
          listGames("canada", "12:00", "morocco") +
          listGames("japan", "16:00", "spain") +
          listGames("costa rica", "16:00", "germany")
      )}
      ${criarCard(
        "02/12",
        "Sexta",
          listGames("south korea", "12:00", "switzerland") +
          listGames("ghana", "12:00", "uruguay") +
          listGames("cameroon", "16:00", "brazil") +
          listGames("serbia", "16:00", "switzerland")
      )}
    
</main>
`;

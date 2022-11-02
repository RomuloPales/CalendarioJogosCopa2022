function listGames(time1, hour, time2) {
  return `
               <li> 
                <img src="./assets/icon=${time1}.svg" alt="bandeira${time1}">                
                <strong>${hour}</strong>
                <img src="./assets/icon=${time2}.svg" alt="bandeira${time2}">
                
                </li>
               <div class="foot" > <h1> ${time1[0].toUpperCase()+time1.substring(1)} </h1>
                <h3> X </h3>
                <h1>${time2[0].toUpperCase()+time2.substring(1)}</h1></div>
            `;
}

function criarCard(date, day, games) {
  return `
    <div class="card">
     <h2>${date} <span>${day}</span></h2>
     <ul>
     ${games} 
     </ul>
    </div>
    `;
}

document.querySelector("#app").innerHTML = `
<header>
    <img class="logo" src="./assets/logo.svg" alt="logoNlw">
</header>
<main id="cards">
    ${  criarCard("20/11","Domingo",
            listGames("qatar", "16:00", "ecuador") 
        
    )}
    ${  criarCard("21/11", "Segunda", 
           listGames("england", "10:00", "iran")+
           listGames("senegal", "13:00", "netherlands")+
           listGames("united states", "16:00", "wales")
    )}
    ${  criarCard("22/11", "Terça", 
            listGames("argentina", "07:00", "saudi arabia") +
            listGames("denmark", "10:00", "tunisia") + 
            listGames("mexico", "13:00", "poland") +
            listGames("france", "16:00", "australia")           
    )}
    ${  criarCard("23/11", "Quarta", 
            listGames("morocco", "07:00", "croatia") +
            listGames("germany", "10:00", "japan") + 
            listGames("spain", "13:00", "costa rica") +
            listGames("belgium", "16:00", "canada")           
    )}
    ${  criarCard("24/11", "Quarta", 
            listGames("switzerland", "07:00", "cameroon") +
            listGames("uruguay", "10:00", "south korea") + 
            listGames("portugal", "13:00", "ghana") +
            listGames("brazil", "16:00", "serbia")           
)}
    
</main>
`;

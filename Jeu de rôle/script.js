"use strict";

// FONCTION DEROULEMENT DU COMBAT //

function attack(player, damages) {
  let i = 1;
  let body = document.getElementsByTagName("body");
  let fightLog = document.createElement("ol");
  body[0].appendChild(fightLog);
  let winnerMessage = document.createElement("h2");
  body[0].appendChild(winnerMessage);

  while (adventurer.lifepoints > 0 && dungeonMaster.lifepoints > 0) {
    if (i % 2 != 0) {
      player = dungeonMaster;
      damages = dungeonMaster.damages - adventurer.armor;
      if (dungeonMaster.damages < adventurer.armor) {
        damages = 0;
      }
      let newLi = document.createElement("li");

      adventurer.lifepoints = adventurer.lifepoints - damages;
      newLi.innerHTML = `Le maître du Donjon inflige ${damages} points de dégâts à l'aventurier ! \n
        Il lui reste ${adventurer.lifepoints} points de vie !`;
      fightLog.appendChild(newLi);

      console.log(`Le maître du Donjon inflige ${damages} points de dégâts à l'aventurier ! \n
                    Il lui reste ${adventurer.lifepoints} points de vie !`);
      i++;
      if (adventurer.lifepoints <= 0) {
        console.log("Le maître du Donjon remporte le duel !");
        winnerMessage.innerHTML = "OH NOOOOON VOUS AVEZ PERDU ! GET REKT";
      }
    } else {
      player = adventurer;
      damages = adventurer.damages - dungeonMaster.armor;
      if (adventurer.damages < dungeonMaster.armor) {
        damages = 0;
      }

      dungeonMaster.lifepoints = dungeonMaster.lifepoints - damages;
      let newLi = document.createElement("li");
      newLi.innerHTML = `L'aventurier inflige ${damages} points de dégâts au Maître du Donjon ! \n
        Il lui reste ${dungeonMaster.lifepoints} points de vie !`;
      fightLog.appendChild(newLi);
      console.log(`L'aventurier inflige ${damages} points de dégâts au maître du Donjon !\n
                    Il lui reste ${dungeonMaster.lifepoints} points de vie !`);
      i++;
      if (dungeonMaster.lifepoints <= 0) {
        console.log("L'aventurier remporte le duel !");
        winnerMessage.innerHTML =
          "VOUS AVEZ VAINCU LE MAITRE DU DONJON ! GGWP NO RE";
      }
    }
  }
}

// DECLARATION DE VARIABLES //
let adventurer = {
  lifepoints: 20,
  damages: "",
  armor: "",
};
let weapons = {
  wood: 2,
  iron: 5,
  magic: 10,
};
let armors = {
  wood: 1,
  iron: 3,
  magic: 5,
};
let dungeonMaster = {
  lifepoints: 30,
  damages: 6,
  armor: 4,
};

// RECUPERATION DES DONNES DU FORMULAIRES POUR ATTRIBUTION ARMES ET ARMURES //
document.getElementById("weapon-select").onsubmit = function (event) {
  event.preventDefault();

  if (document.getElementById("weapon-wood").checked) {
    adventurer.damages = weapons.wood;
  }

  if (document.getElementById("weapon-iron").checked) {
    adventurer.damages = weapons.iron;
  }
  if (document.getElementById("weapon-magic").checked) {
    adventurer.damages = weapons.magic;
  }
  if (document.getElementById("armor-wood").checked) {
    adventurer.armor = armors.wood;
  }
  if (document.getElementById("armor-iron").checked) {
    adventurer.armor = armors.iron;
  }
  if (document.getElementById("armor-magic").checked) {
    adventurer.armor = armors.magic;
  }
  console.log("Le combat commence ! ");
  attack();
};

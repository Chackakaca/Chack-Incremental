var gameData = {
    orbs: 0,
    orbsPerClick: 1
  }

  function getOrbs() {
    gameData.orbs += gameData.orbsPerClick
    document.getElementById("chackOrbs").innerHTML = gameData.orbs + " Orbs Retrieved"
  }


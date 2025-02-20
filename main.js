var gameData = {
    version: 0.1,
    orbs: 0,
    orbsPerClick: 1,
    orbsPerClickCost: 10
  }

function renderNumbers() {
    document.getElementById("chackOrbs").innerHTML = gameData.orbs + " Chack Orbs"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Summoning Circle | Cost: " + gameData.orbsPerClickCost
}


function loadGame() {
    var savegame = JSON.parse(localStorage.getItem("chackIncrementalSave"))
if (savegame !== null) {
  if (savegame.version == gameData.version) {
    gameData = savegame
  }
  else {
    savegame.version = gameData.version
    gameData = savegame
  }
  //setup some stuff that sets values after updates
  renderNumbers()
}

  function getOrbs() {
    gameData.orbs += gameData.orbsPerClick //you should probably figure out how to divide this and make it NOT ugly
    renderNumbers()
  }

function upgradeOrbsPerClick() {
    if (gameData.orbs >= gameData.orbsPerClickCost) {
        gameData.orbs -= gameData.orbsPerClickCost
        gameData.orbsPerClick += 1
        gameData.orbsPerClickCost *= 2
        renderNumbers()
    }
}

function saveGame() {
    localStorage.setItem("chackIncrementalSave", JSON.stringify(gameData))
}

function deleteSave() {
    localStorage.setItem("chackIncrementalSave", null)
    location.reload()
}

var saveGameLoop = window.setInterval(function() {
    saveGame()
  }, 10000)

var mainGameLoop = window.setInterval(function() {
    getOrbs()
  }, 1000)

  loadGame()

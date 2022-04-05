let players = [];
let teams = [];

let p = document.createElement('p');
let divResult = document.getElementById('list-data');

// отслеживаем добавление игрока и добавляем значение в массив
document.getElementById('form-player').addEventListener('submit', function (e) {
  e.preventDefault();
  const playerNameValue = document.getElementById('input-player').value;
  const playerNameForm = document.getElementById('form-player');
  console.log(playerNameValue);
  if (playerNameValue !== null) {
    players.push(playerNameValue);
    playerNameForm.reset();
    p.appendChild(document.createTextNode(`${playerNameValue} `));
    divResult.appendChild(p);
  }
  console.log(players);
});

// отслеживаем добавление команд и добавляем значение в массив
document.getElementById('form-team').addEventListener('submit', function (e) {
  e.preventDefault();
  const teamNameValue = document.getElementById('input-team').value;
  const teamNameForm = document.getElementById('form-team');
  console.log(teamNameValue);
  if (teamNameValue !== null) {
    teams.push(teamNameValue);
    teamNameForm.reset();
    p.appendChild(document.createTextNode(`${teamNameValue} `));
    divResult.appendChild(p);
  }
  console.log(teams);
});

// возвращаем рандомное значение из массива
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

// перемешать массив
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// отслеживанием нажатие кнопки рандома
document.getElementById('button-random').addEventListener('click', function (e) {
  e.preventDefault();

  let divResult = document.getElementById('result');

  divResult.innerHTML = '';

  cloneTeams = teams.slice();
  clonePlayers = players.slice();

  if (cloneTeams.length < clonePlayers.length) {
    return alert('Команд меньше, чем игроков. Распределить невозможно. Добавьте ещё команд.');
  }

  i = 0;

  while (i < players.length) {
    team = cloneTeams.sample();
    console.log(players[i] + ' - ' + team);
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(`${players[i]} — ${team}`));
    divResult.appendChild(p);
    i++;
    let myIndex = cloneTeams.indexOf(team);
    if (myIndex !== -1) {
      cloneTeams.splice(myIndex, 1);
    }
    shuffle(cloneTeams);
  }
});

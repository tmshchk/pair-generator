let players = [
  {
    name: 'Игрок №1',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №2',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №3',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №4',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №5',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №6',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №7',
    team: [null, null, null, null, null, null],
  },
  {
    name: 'Игрок №8',
    team: [null, null, null, null, null, null],
  },
];
let teams = [
  'Манчестер Сити',
  'ПСЖ',
  'Манчестер Юнайтед',
  'Ювентус',
  'Реал Мадрид',
  'Челси',
  'Тотенхэм',
  'Ливерпуль',
  'Бавария',
  'Барселона',
  'Боруссия',
  'Севилья',
  'Лейпциг',
  'Милан',
  'Интер',
  'Атлетико',
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
document.getElementById('button-random').addEventListener('click', async function (e) {
  e.preventDefault();

  let divResult = document.getElementById('result');
  divResult.innerHTML = 'Распределяю команды по игрокам...';

  await sleep(1000);

  divResult.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.className = 'flex flex-col max-w-xs p-6 mb-6 border border-slate-200 rounded';
    const h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode(`Тур №${i + 1}`));
    h2.className = 'text-lg text-slate-600 mb-4 grow';
    div.appendChild(h2);

    cloneTeams = teams.slice();
    clonePlayers = players.slice();

    const indexTeam = i;

    for (let i = 0; i < players.length; i++) {
      let team = cloneTeams.sample();

      if (clonePlayers[i].team[indexTeam] === null) {
        if (players[i].team.includes(team, 0) === true) {
          do {
            let newTeam = cloneTeams.sample();
            team = newTeam;
          } while (players[i].team.includes(team, 0) === true);
          clonePlayers[i].team[indexTeam] = team;
        } else {
          clonePlayers[i].team[indexTeam] = team;
        }
      }

      let p = document.createElement('p');

      p.appendChild(document.createTextNode(`${players[i].name}`));
      p.className = 'text-base text-slate-500 mb-4';
      div.appendChild(p);

      p.appendChild(document.createTextNode(` — ${clonePlayers[i].team[indexTeam]}`));
      p.className = 'text-base text-slate-500 mb-4';
      div.appendChild(p);

      let myIndex = cloneTeams.indexOf(team);
      if (myIndex !== -1) {
        cloneTeams.splice(myIndex, 1);
      }

      shuffle(cloneTeams);
    }

    divResult.appendChild(div);
  }
});

        //let players = ["Саша", "Джамал", "Никита", "Женя"];

        //let teams = ["Ювентус", "МЮ", "ПСЖ", "Бавария"];

        let players = [];
        let teams = [];

        function addPlayer() {
            while (name !== null) {
                let name = prompt('Введите имя игрока:');
                if (name !== null) {
                    players.push(name);
                } else {
                    break;
                }
            }
        };

        function addTeam() {
            while (name !== null) {
                let name = prompt('Введите название команды:');
                if (name !== null) {
                    teams.push(name);
                } else {
                    break;
                }
            }
        };

        

        // возвращаем рандомное значение из массива
        Array.prototype.sample = function(){
            return this[Math.floor(Math.random()*this.length)];
        }

        function randomGame() {
            i = 0;
            cloneTeams = teams.slice();

            while (i < players.length) {
                team = cloneTeams.sample();
                console.log(players[i] + " - " + team);
                i++;
                let myIndex = cloneTeams.indexOf(team);
                if (myIndex !== -1) {
                    cloneTeams.splice(myIndex, 1);
                }
                shuffle(cloneTeams);
            }
        }

        // перемешать массив
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
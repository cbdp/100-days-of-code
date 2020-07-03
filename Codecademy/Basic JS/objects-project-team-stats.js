const team = {
  _players: [{
    firstName: 'red',
    lastName: 'one',
    age: 1,
  },
  {
    firstName: 'blue', 
    lastName: 'two',
    age: 2,
  },
  {
    firstName: 'green',  
    lastName: 'three',
    age: 3,
  }],
  _games: [{
    opponent: 'game one',
    teamPoints: 10,
    opponentPoints: 12,
  }, 
  {
    opponent: 'game two',
    teamPoints: 12,
    opponentPoints: 10,
  }, 
  {
    opponent: 'game three',
    teamPoints: 14,
    opponentPoints: 14,
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player)
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game)
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('rascals', 10, 1);
team.addGame('ksjdfhk', 1, 10);
team.addGame('glorb', 11, 11);
console.log(team.games);
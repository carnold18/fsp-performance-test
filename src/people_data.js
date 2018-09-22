let faker = require('faker');

const playerLimit = 15;
const teamsArray = ["Rockets", "Mavericks", "Lakers", "Spurs", "Thunder", "Celtics", "Hornets", "Nuggets", "Warriors", "Heat"];
let teamList = [];
let playerList = [];
let j = 0;
let i = 0;

for (j=0; j < teamsArray.length-1; j++) {

  for (i < 0; i < playerLimit; i++) {
    playerList.push({id: i+1, name: faker.fake("{{name.lastName}}, {{name.firstName}}"), image: faker.fake("{{image.people}}"), ind_points: Math.round(Math.random()*30), total_points: Math.round(Math.random()*120)})
  }

  teamList.push(
    {
      team_name: teamsArray[j],
      players: playerList
    }
  ) 
}

let faker = require('faker');

const playerLimit = 15;
const teamsArray = ["Hoops I Did It Again", "Basket Junkies", "And One", "Rockets", "Mavericks", "Lakers", "Spurs", "Thunder", "Celtics", "Hornets"];
let teamList = [];
let playerList = [];
let j = 0;
let i = 0;
let newVal = 0;

for (j=0; j < teamsArray.length-1; j++) {

 for (i = 0; i < playerLimit; i++) {
   newVal++;
   playerList.push({team_name: teamsArray[j], id: newVal, name: faker.fake("{{name.lastName}}, {{name.firstName}}"), image: "https://imgix.ranker.com/user_node_img/72/1426910/original/lebron-james-photo-u186?w=650&q=50&fm=jpg&fit=crop&crop=faces", ind_points: Math.round(Math.random()*30), total_points: Math.round(Math.random()*120)})
 }

}
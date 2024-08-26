// Coding Challenge #1

// We re building a football betting app (soccer for my American friends )! Suppose we get

// data from a web service about a certain game ( game  variable on next page). In this

// challenge we re gonna work with that data.

// Your tasks:

// 1. Create one player array for each team (variables  players1  and  players2 )
const players1 = [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
];

const players2 = [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
];

const teamName1 = 'Bayern Munich';
const teamName2 = 'Borrussia Dortmund';
// 2. The first player in any player array is the goalkeeper and the others are field players.

// For Bayern Munich (team 1) create one variable ( gk ) with the goalkeeper s name, and

// one array ( fieldPlayers ) with all the remaining 10 field players

const gk1 = players1[0];
const gk2 = players2[0];

const fieldPlayers1 = players1.filter(
    (value, index) => index != 0
)

const fieldPlayers2 = players1.filter(
        (value, index) => index != 0
    )
    // 3. Create an array  allPlayers  containing all players of both teams (22 players)

const allPlayers = [
        players1,
        players2
    ]
    // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new

// array ( players1Final ) containing all the original team1 players plus  Thiago ,  Coutinho 

// and  Perisic 

const players1Final = ["Thiago", "Coutinho", "Perisic"];
const players2Final = [];

// 5. Based on the game.odds object, create one variable for each odd (called  team1 ,

//  draw  and  team2 )

const odds = {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
}

// 6. Write a function ( printGoals ) that receives an arbitrary number of player names (not

// an array) and prints each of them to the console, along with the number of goals that

// were scored in total (number of player names passed in)


// 7. The team with the lower odd is more likely to win. Print to the console which team is

// more likely to win, without using an if/else statement or the ternary operator.

// Test data for 6: First, use players  Davies ,  Muller ,  Lewandowski  and  Kimmich .

// Then, call the function again with players from game.scoredconst game = {
const game = {
    team1: teamName1,
    team2: teamName2,
    players: allPlayers,
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: odds,

    printGoals: (...arg) => {
        const length = arg.length;
        for (let i = 0; i < length; i++) {

        }
    }
};
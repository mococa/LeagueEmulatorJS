var playersConfig = require('./Constants/playersConfig');
var Player = require('./Classes/Player');


function init_players(){
    for(let i in playersConfig)
        for(let j in playersConfig[i])
            new Player(playersConfig[i][j], i, j);
}

module.exports = init_players;

const gameState = {
    playerIdle: 'assets/player_idle.png',
    playerAttack: 'assets/player_attack.png',
    playerDefend: 'assets/player_defend.png',
    playerHealth: 10,
    enemyHealth: 10, 
};

function preload() {
    this.load.image('bg', 'assets/background.png');
    this.load.image('playerIdle', gameState.playerIdle);
    this.load.image('playerAttack', gameState.playerAttack);
    this.load.image('playerDefend', gameState.playerDefend);
}

function create() {
    gameState.background = this.add.image(400, 300, 'bg').setScale(1.5);
    gameState.attack = this.add.rectangle(225, 200, 100, 30, 0x964B00);
    this.add.text(190, 190, 'Attack', {
        fill: "black",
        fontSize: 20
    });
    gameState.defend = this.add.rectangle(115, 200, 100, 30, 0x964B00);
    this.add.text(80, 190, 'Defend', {
        fill: "black",
        fontSize: 20
    });

    gameState.playerStance = this.add.sprite(170, 250, 'playerIdle');
    gameState.attack.setInteractive();
    gameState.attack.on('pointerup', function() {
        gameState.playerStance.setTexture('playerAttack');
        setTimeout(() => {
            gameState.playerStance.setTexture('playerIdle');
        }, 500);
    });
    gameState.defend.setInteractive();
    gameState.defend.on('pointerup', function() {
        gameState.playerStance.setTexture('playerDefend');
        setTimeout(() => {
            gameState.playerStance.setTexture('playerIdle');
        }, 500);
    });
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xADD8E6,
    scene: {
        preload,
        create,
    }
}

const game = new Phaser.Game(config);
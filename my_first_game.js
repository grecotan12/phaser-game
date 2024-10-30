const gameState = {
    playerIdle: 'assets/player_idle.png',
    playerAttack: 'assets/player_attack.png',
    playerDefend: 'assets/player_defend.png',
    enemyIdle: 'assets/enemy_idle.png',
    enemyAttack: 'assets/enemy_attack.png',
    enemyDefend: 'assets/enemy_defend.png',
    playerHealth: 10,
    enemyHealth: 10, 
};

function preload() {
    this.load.image('bg', 'assets/background.png');
    this.load.image('playerIdle', gameState.playerIdle);
    this.load.image('playerAttack', gameState.playerAttack);
    this.load.image('playerDefend', gameState.playerDefend);
    this.load.image('enemyIdle', gameState.enemyIdle);
    this.load.image('enemyAttack', gameState.enemyAttack);
    this.load.image('enemyDefend', gameState.enemyDefend);
    this.load.image('battleGround', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJCQPlTWVg4T2W01zh7lKn0SG2npU81Q-mg&s');
}

function create() {
    gameState.background = this.add.image(400, 300, 'bg').setScale(1.5);
    game.battleGround = this.add.image(400, 280, 'battleGround').setScale(3.5, 1);
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
    gameState.playerHP = this.add.text(140, 325, `HP: ${gameState.playerHealth}`);
    gameState.enemyHP = this.add.text(480, 325, `HP: ${gameState.enemyHealth}`);
    gameState.enemyOutput = this.add.text(480, 200, '');
    gameState.playerStance = this.add.sprite(170, 250, 'playerIdle');
    gameState.enemyStance = this.add.sprite(500, 250, 'enemyIdle');
    gameState.finalOutput = this.add.text(300, 250, '');
    gameState.enemyStance.flipX = true;
    gameState.attack.setInteractive();
    gameState.attack.on('pointerup', function() {
        if (gameState.playerHealth === 0) {
            gameState.finalOutput.text = "You lost!";
            gameState.playerHealth = 10;
            gameState.playerHP.text = `HP: ${gameState.playerHealth}`;
            setTimeout(() => {
                gameState.finalOutput.text = '';
            }, 500);
        }
        if (gameState.enemyHealth === 0) {
            gameState.finalOutput.text = "You won!";
            gameState.enemyHealth = 10;
            gameState.enemyHP.text = `HP: ${gameState.enemyHealth}`;
            setTimeout(() => {
                gameState.finalOutput.text = '';
            }, 500);
        }
        const randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            gameState.enemyOutput.text = 'Attack';
            gameState.enemyStance.setTexture('enemyAttack');
            setTimeout(() => {
                gameState.enemyOutput.text = '';
                gameState.enemyStance.setTexture('enemyIdle');
            }, 500);
        } else {
            gameState.enemyOutput.text = 'Defend';
            gameState.enemyStance.setTexture('enemyDefend');
            setTimeout(() => {
                gameState.enemyOutput.text = '';
                gameState.enemyStance.setTexture('enemyIdle');
            }, 500);
            gameState.playerHP.text = `HP: ${gameState.playerHealth}`;
            gameState.enemyHP.text = `HP: ${gameState.enemyHealth}`;
            gameState.playerHealth--;
        }
        gameState.playerStance.setTexture('playerAttack');
        setTimeout(() => {
            gameState.playerStance.setTexture('playerIdle');
        }, 500);
    });
    gameState.defend.setInteractive();
    gameState.defend.on('pointerup', function() {
        if (gameState.playerHealth === 0) {
            gameState.finalOutput.text = "You lost!";
            gameState.playerHealth = 10;
            gameState.playerHP.text = `HP: ${gameState.playerHealth}`;
            setTimeout(() => {
                gameState.finalOutput.text = '';
            }, 500);
        }
        if (gameState.enemyHealth === 0) {
            gameState.finalOutput.text = "You won!";
            gameState.enemyHealth = 10;
            gameState.enemyHP.text = `HP: ${gameState.enemyHealth}`;
            setTimeout(() => {
                gameState.finalOutput.text = '';
            }, 500);
        }
        const randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            gameState.enemyOutput.text = 'Attack';
            gameState.enemyStance.setTexture('enemyAttack');
            setTimeout(() => {
                gameState.enemyOutput.text = '';
                gameState.enemyStance.setTexture('enemyIdle');
            }, 500);
            gameState.playerHP.text = `HP: ${gameState.playerHealth}`;
            gameState.enemyHP.text = `HP: ${gameState.enemyHealth}`;
            gameState.enemyHealth--;
        } else {
            gameState.enemyOutput.text = 'Defend';
            gameState.enemyStance.setTexture('enemyDefend');
            setTimeout(() => {
                gameState.enemyOutput.text = '';
                gameState.enemyStance.setTexture('enemyIdle');
            }, 500);
        }
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
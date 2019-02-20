// 这是我们的玩家要躲避的敌人 
var Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 500 + 100);
    this.sprite = 'images/enemy-bug.png';
};

// 要应用到每个敌人的实例的变量写在这里
// 我们已经提供了一个来帮助你实现更多

// 敌人的图片，用一个我们提供的工具函数来轻松的加载文件


// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function (dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += dt * this.speed;


    // // window.requestAnimationFrame();
    if (this.x > 600) {
        this.x = -50;
        this.speed = Math.floor(Math.random() * 500 + 100);
    }

    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        player.y + 30 > this.y) {
        player.x = 200;
        player.y = 380;
    }
    
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function () {
    // console.log(this.x);
    // console.log(this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x + 20, this.y - 10);
};
// Enemy.prototype.checkCollision=function(player){
//     if(this.y===player.y){
//         console.log('collision happened!! enemy.x:${thsi.x},play.x:${player.x}')
//     }else{
//         console.log('player`s safe!! enemy.x:${this.x},play.x:${player.x}')
//     }

// }

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function (x, y) {
    this.x = x;
    this.y = y;

    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function (dt) {

};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function (movement) {
    var tile_width = 101;
    var tile_height = 83;

    switch (movement) {
        case 'left':
            if (this.x > 0) {
                this.x -= tile_width;
            }
            break;
        case 'right':
            if (this.x < 402) {
                this.x += tile_width;
            }
            break;
        case 'up':
            if (this.y > 67) {
                this.y -= tile_height;
            }
            break;
        case 'down':
            if (this.y < 400) {
                this.y += tile_height;
            }
            break;

    }
}



// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
for (var i = 0; i < 6; i++) {
    var bug = new Enemy(-20, 83 * (i % 3) + 72);
    allEnemies.push(bug);
} //[new Enemy(1, 151),new Enemy(1, 233),new Enemy(1, 68)];
var player = new Player(200, 400);

// var Enemy_1=new Enemy(101*2,83*3);
// var Enemy_2=new Enemy(80,83*2);
// var Enemy_3=new Enemy(0,83*1);
// var allEnemies=[Enemy_1,Enemy_2,Enemy_3];
// var player=new Player(202,404);
// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

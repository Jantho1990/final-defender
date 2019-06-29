import Phaser from 'phaser'
import logoImg from "../assets/logo.png";
// import Player from '../entities/player'
import Bullet from '../entities/Bullet'
import Enemy from '../entities/Enemy'

import EnemyFactory from '../factories/EnemyFactory'

import playerImg from '../assets/img/spaceship.png'
import bulletImg from '../assets/img/laser-bullet.png'
import enemyImg from '../assets/img/ufo.png'

export default class GameScene extends Phaser.Scene {
    constructor () {
        super('Game')
    }

    preload() {
      // this.load.image("logo", logoImg);
      this.load.image('spaceship', playerImg)
      this.load.image('bullet', bulletImg)
      this.load.image('enemy', enemyImg)
    }

    create() {
      // const logo = this.add.image(400, 150, "logo");
      
      // Bullets container
      this.bullets = this.add.group({
        classType: Bullet,
        runChildUpdate: true
      })
      this.lastFired = 0

      // Enemies container
      this.enemies = this.add.group({
        classType: Enemy,
        runChildUpdate: true
      })
      this.enemiesFactory = new EnemyFactory({
        container: this.enemies,
        boundaries: {
          x: [this.game.config.width + 100, this.game.config.width + 200],
          y: [50, this.game.config.height - 50]
        }
      })
        .create(20)
      
      // this.add.sprite()
      // this.player = new Player(this, { x: 100, y: 100 })
      // console.log(this.player)
      this.player = this.impact.add.sprite(100, 100, 'spaceship')
      this.player.setMaxVelocity(1000).setFriction(800, 600).setPassiveCollision()

      this.cursors = this.input.keyboard.createCursorKeys()

      /* this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
      }); */
    }

    update (time, delta) {
      const { cursors, player } = this

      if (cursors.right.isDown) {
        player.setAccelerationX(800)
      } else if (cursors.left.isDown) {
        player.setAccelerationX(-800)
      } else {
        player.setAccelerationX(0)
      }

      if (cursors.up.isDown) {
        player.setAccelerationY(-800)
      } else if (cursors.down.isDown) {
        player.setAccelerationY(800)
      } else {
        player.setAccelerationY(0)
      }

      if (cursors.space.isDown && time > this.lastFired) {
        let bullet = this.bullets.get()
        bullet.setActive(true)
        bullet.setVisible(true)

        if (bullet) {
          bullet.fire(player)
          this.lastFired = time + 100
        }
      }
    }
}
import Phaser from 'phaser'
import logoImg from "../assets/logo.png";
// import Player from '../entities/player'

import playerImg from '../assets/img/spaceship.png'

export default class GameScene extends Phaser.Scene {
    constructor () {
        super('Game')
    }

    preload() {
      this.load.image("logo", logoImg);
      this.load.image('spaceship', playerImg)
    }

    create() {
      const logo = this.add.image(400, 150, "logo");
      
      // this.add.sprite()
      // this.player = new Player(this, { x: 100, y: 100 })
      // console.log(this.player)
      this.player = this.impact.add.sprite(100, 100, 'spaceship')
      this.player.setMaxVelocity(1000).setFriction(800, 600).setPassiveCollision()

      this.cursors = this.input.keyboard.createCursorKeys()

      this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
      });
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
    }
}
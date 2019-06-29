import Phaser from 'phaser'

export default class Enemy extends Phaser.GameObjects.Image {
  constructor (scene) {
    super(scene, 0, 0, 'enemy')

    this.speed = 0
    this.born = 0
  }

  spawn ({ x, y }) {
    this.setPosition(x, y)
    let randNum = Phaser.Math.Between(50, 100)
    this.speed = Phaser.Math.GetSpeed(randNum, 1)
    this.born = 0
  }

  update (time, delta) {
    this.y += this.speed * delta

    this.born += delta
  }
} 
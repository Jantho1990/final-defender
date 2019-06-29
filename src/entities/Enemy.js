import Phaser from 'phaser'

export default class Enemy extends Phaser.GameObjects.Image {
  constructor (scene) {
    super(scene, 0, 0, 'enemy')

    this.speed = 0
    this.born = 0
  }

  spawn ({ x, y }) {
    console.log('x:', x, 'y:', y)
    this.setPosition(x, y)
    this.speed = Phaser.Math.GetSpeed(10, 1)
    this.born = 0
    console.log(this.x, this.y)
  }

  update (time, delta) {
    // console.log('delta enemy:', delta)
    this.x -= this.speed * delta

    this.born += delta
    // console.log(this.x, this.y)
  }
} 
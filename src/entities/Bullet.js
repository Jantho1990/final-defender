import Phaser from 'phaser'

export default class Bullet extends Phaser.GameObjects.Image {
  constructor (scene) {
    super(scene, 0, 0, 'bullet')

    this.speed = 0
    this.born = 0
  }

  fire (player) {
    this.setPosition(player.x, player.y)

    this.speed = Phaser.Math.GetSpeed(1000 + player.vel.x, 1)

    this.born = 0
  }

  update (time, delta) {
    console.log('delta bullet:', delta)
    this.x += this.speed * delta

    this.born += delta

    if (this.born > 1000) {
      this.setActive(false)
      this.setVisible(false)
    }
  }
} 
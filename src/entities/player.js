import Phaser from 'phaser'
import texture from '../assets/img/spaceship.png'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor (
    game,
    coordinates = {
      x: 0,
      y: 0
    },
    key = '__default',
    frame = 0
  ) {
    const { x, y } = coordinates

    const img = game.load.image('texture', texture)

    super(game, x, y, img, frame)
  }

  preload () {
    this.load.image('texture', texture)
  }

}
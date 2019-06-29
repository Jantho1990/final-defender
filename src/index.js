import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import { config } from './config/phaser'
import GameScene from './scenes/GameScene'

class Game extends Phaser.Game {
  constructor () {
    super(config)
    this.scene.add('Game', GameScene)
    this.scene.start('Game')
  }
}

window.onload = function () {
  window.game = new Game()
}
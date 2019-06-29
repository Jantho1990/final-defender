import Enemy from '../entities/Enemy'

export default class EnemyFactory {
  constructor (container) {
    this.container = container

    return this
  }

  create (amt = 20) {
    for (let i = 0; i < amt; i++) {
      const x = Phaser.Math.Between(200, 500)
      const y = Phaser.Math.Between(100, 300)
  
      const enemy = this.container.get()
      enemy.setActive(true)
      enemy.setVisible(true)

      if (enemy) {
        enemy.spawn({ x, y })
      }
    }
  }
}
import Enemy from '../entities/Enemy'

export default class EnemyFactory {
  constructor ({
    container,
    boundaries = { x: [100, 500], y: [100, 500]}
  }) {
    this.container = container
    this.boundaries = boundaries

    return this
  }

  create (amt = 20) {
    const { x: [ xLower, xUpper ], y: [ yLower, yUpper ] } = this.boundaries
    
    for (let i = 0; i < amt; i++) {
      const x = Phaser.Math.Between(xLower, xUpper)
      const y = Phaser.Math.Between(yLower, yUpper)
  
      const enemy = this.container.get()
      enemy.setActive(true)
      enemy.setVisible(true)

      if (enemy) {
        enemy.spawn({ x, y })
      }
    }
  }
}
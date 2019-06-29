const { innerWidth, innerHeight } = window

export const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: innerWidth,
    height: innerHeight,
    physics: {
      default: 'impact',
      impact: {
        setBounds: {
          x: 0,
          y: 0,
          width: innerWidth,
          height: innerHeight,
          thickness: 32
        }
      }
    },
    extends: {
      cursors: null
    }
  };
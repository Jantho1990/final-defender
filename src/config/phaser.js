export const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'impact',
      impact: {
        setBounds: {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          thickness: 32
        }
      }
    },
    extends: {
      cursors: null
    }
  };
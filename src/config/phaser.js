const { innerWidth, innerHeight } = window

const width = innerWidth > 768 ? 768 : innerWidth
const height = innerHeight - 100

export const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width,
    height,
    /* scale: {
      parent: 'body',
      mode: Phaser.Scale.FIT,
      width: 768,
      height
    }, */
    physics: {
      default: 'impact',
      impact: {
        setBounds: {
          x: 0,
          y: 0,
          width,
          height,
          thickness: 32
        }
      }
    },
    extends: {
      cursors: null
    }
  };
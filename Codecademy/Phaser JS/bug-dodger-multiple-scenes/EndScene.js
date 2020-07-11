class EndScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EndScene' })
	}

	create() {
		this.add.text( 50, 250, 'Sorry to hear you died, click to restart', {fill: '#000000', fontSize: '14px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('EndScene')
			this.scene.start('StartScene')
		})
	}
}

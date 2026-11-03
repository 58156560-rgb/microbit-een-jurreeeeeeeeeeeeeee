input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        servos.P1.setAngle(0)
        basic.pause(1000)
        servos.P1.setAngle(90)
    }
})
music.setTempo(20)

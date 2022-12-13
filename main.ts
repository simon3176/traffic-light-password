input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.B, function () {
    if (Password == Entry) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(10)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    basic.pause(1000)
    basic.clearScreen()
    Entry = ""
})
let Entry = ""
let Password = ""
Password = "AAAA"
Entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(97)
basic.forever(function () {
	
})

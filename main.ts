basic.showString("Este puzle es aún más dificil que el anterior :)")
basic.pause(5000)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
basic.forever(function () {
    basic.pause(1000)
    if (input.buttonIsPressed(Button.A)) {
        if (input.logoIsPressed()) {
            if (input.isGesture(Gesture.TiltRight)) {
                if (input.buttonIsPressed(Button.B)) {
                    if (input.lightLevel() <= 30) {
                        music.playMelody("B A G A G F A C5 ", 120)
                        basic.pause(5000)
                    } else {
                        while (input.lightLevel() > 30) {
                            basic.showString("Mucha luz")
                        }
                    }
                } else {
                    basic.showLeds(`
                        # # # . .
                        # . . # .
                        # # # . .
                        # . . # .
                        # # # . .
                        `)
                }
            } else {
                while (!(input.isGesture(Gesture.TiltRight))) {
                    basic.showIcon(IconNames.No)
                    basic.showArrow(ArrowNames.West)
                }
            }
        } else {
            basic.showArrow(ArrowNames.North)
        }
    } else {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})

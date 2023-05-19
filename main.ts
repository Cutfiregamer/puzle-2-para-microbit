// cambiar algunas cosas
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (resultado > Tiempo) {
        music.playMelody("G B A G C5 B A B ", 120)
        basic.showString("Jugador A gana")
    }
    if (resultado < Tiempo) {
        music.playMelody("B A G A G F A C5 ", 120)
        basic.showString("Jugador B gana")
    }
})
input.onButtonPressed(Button.A, function () {
    if (Tiempo == 2) {
        Tiempo += 0
    } else if (Tiempo == 0) {
        Tiempo += 1
    } else {
        Tiempo += 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (resultado == 2) {
        resultado += 0
    } else if (resultado == 0) {
        resultado += 1
    } else {
        resultado += 2
    }
})
let Tiempo = 0
let resultado = 0
resultado = 0
Tiempo = 0

LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.DisString(
10,
10,
"Hello! Let's wash our hands.",
255
)
LCD1IN8.LCD_Filling(COLOR.CYAN)
LCD1IN8.LCD_Display()
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let lightlevel = input.lightLevel()
basic.forever(function () {
    lightlevel = input.lightLevel()
    if (lightlevel < 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            # # . # .
            # # . . .
            `)
        LCD1IN8.DisString(
        10,
        35,
        "Turn on the sink!",
        33825
        )
        LCD1IN8.LCD_Display()
        music.playTone(262, music.beat(BeatFraction.Whole))
        control.waitMicros(2500000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
        LCD1IN8.DisString(
        10,
        45,
        "Wet your hands!",
        255
        )
        LCD1IN8.LCD_Display()
        music.playTone(262, music.beat(BeatFraction.Whole))
        control.waitMicros(1500000)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # . . .
            # # . # #
            # # . . .
            `)
        LCD1IN8.DisString(
        10,
        55,
        "Get a squirt of soap!",
        33825
        )
        LCD1IN8.LCD_Display()
        music.playTone(262, music.beat(BeatFraction.Whole))
        control.waitMicros(1500000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # # . # #
            # # . # #
            `)
        LCD1IN8.DisString(
        10,
        65,
        "Rub your hands!",
        255
        )
        LCD1IN8.LCD_Display()
        music.playTone(262, music.beat(BeatFraction.Whole))
        control.waitMicros(1000000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # . . .
            # # . # #
            # # . . .
            `)
        LCD1IN8.DisString(
        10,
        75,
        "Rinse your hands!",
        33825
        )
        LCD1IN8.LCD_Display()
        music.playTone(262, music.beat(BeatFraction.Whole))
        control.waitMicros(1500000)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
        LCD1IN8.DisString(
        10,
        85,
        "Great job!",
        255
        )
        LCD1IN8.LCD_Display()
        soundExpression.happy.play()
        control.waitMicros(500000)
        control.reset()
    }
})

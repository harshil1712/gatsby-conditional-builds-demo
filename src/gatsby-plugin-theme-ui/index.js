const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`
const grey90 = `#1a1a1c`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`

export default {
    initialColorModeName: `light`,
    colors: {
        text: blueGray,
        primary: darkBlue,
        heading: blueGray,
        modes: {
            dark: {
                text: lightWhite,
                background: grey90,
                primary: lightBlue,
                secondary: lightWhite,
                muted: opaqueLightWhite,
                highlight: darkBlue,
                heading: white,
            },
        },
    },
    link: {
        highlight: {
            color: 'tomato'
        }
    }
}

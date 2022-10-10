import { DefaultTheme, useTheme } from "styled-components"

export const light: DefaultTheme = {
    name: "light-theme",
    colors: {
        header: "#D3D4FF",
        headerBottomBorder: "#E6E6E6",
        background: "#FDFDFD",
        footer: "#E3E3E3",
        footerText: "#2D2D2D",
        cardBorder: "#E6E6E6",
        cardText: "#1a1a1a"
    },
    gender: "joe"
}

export const dark: DefaultTheme = {
name: "dark-theme",
colors: {
        header: "#A4A5FF",
        headerBottomBorder: "#A4A5FF",
        background: "#262626",
        footer: "#232323",
        footerText: "#A4A5FF",
        cardBorder: "#3C3C3C",
        cardText: "#F8F8F8"
    }
}



// export theme = useTheme() as light

// export const headerBg = theme('mode', {
//     dark: "#A4A5FF",
//     light: "#D3D4FF"
// })

// export const mainBg = theme('mode', {
//     dark: "#262626",
//     light: "#FDFDFD"
// })
// export const footerBg = theme('mode', {
//     dark: "#232323",
//     light: "#E3E3E3"
// })
// export const headerBottomBorder = theme('mode', {
//     dark: "#A4A5FF",
//     light: "#E6E6E6"
// })
// export const cardBorder = theme('mode', {
//     dark: "#3C3C3C",
//     light: "#E6E6E6"
// })
// export const footerText = theme('mode', {
//     dark: "#A4A5FF",
//     light: "#2D2D2D"
// })

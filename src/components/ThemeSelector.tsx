import React from 'react'
import { ThemeButton, ThemeContainer } from './styled.components'

const ThemeSelector = () => {
    return (
        <ThemeContainer>
            <ThemeButton className="light active"></ThemeButton>
            <ThemeButton className="dark"></ThemeButton>
            <ThemeButton className="blue"></ThemeButton>
            <ThemeButton className="green"></ThemeButton>
            <ThemeButton className="brown"></ThemeButton>
            <ThemeButton className="pink"></ThemeButton>
        </ThemeContainer>
    )
}

export default ThemeSelector
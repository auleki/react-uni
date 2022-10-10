import React, { useState } from 'react'
import { HeaderProps } from './Header'

const ToggleTheme = ({ toggleTheme, isDarkMode }: HeaderProps) => {
    return (
        <button onClick={toggleTheme}>
            Switch to {isDarkMode ? "light-mode" : "dark-mode"}
        </button>
    )
}
export default ToggleTheme
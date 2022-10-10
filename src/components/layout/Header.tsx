import { SCHeader } from "../styled.components"
import ThemeSelector from "../ThemeSelector"
import ToggleTheme from "./ToggleTheme"

export type HeaderProps = {
    toggleTheme: () => void,
    isDarkMode: boolean
}

const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
    return (
        <SCHeader>
            <h3 className="title">Header</h3>
            {/* <ThemeSelector /> */}
            <ToggleTheme toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </SCHeader>
    )
}

export default Header
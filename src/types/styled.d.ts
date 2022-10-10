import 'styled-components'
import 'styled-theming'
import {light} from '../styles/Theme.styled'

type CustomTheme = typeof light;

declare module "styled-componets" {
    export interface DefaultTheme extends CustomTheme {
        name: string;
        colors: {
            header: string;
            headerBottomBorder: string;
            background: string;
            footer: string;
            footerText: string;
            cardBorder: string;
            cardText: string;
        }
    }
}


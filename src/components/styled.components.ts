import styled from 'styled-components'

export const Div = styled.section`
    // padding: 2rem 1rem;
`

export const SCHeader = styled(Div)`
    background: ${({theme}) => theme.colors.header};
    padding: 2rem 1rem;
`

export const SCMain = styled(Div)`
    background: ${({theme}) => theme.colors.background};
    transition: background 200ms ease-in;
    align-items: center;
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding-top: 2rem;
    justify-contents: center;
    // height: 71vh;
`

export const SCFooter = styled(Div)`
    background:${({theme}) => theme.colors.footer};
    color: ${({theme}) => theme.colors.footerText};
    padding: 2rem 1rem;
`

export const SCard = styled.div`
    border: 2px solid ${({theme}) => theme.colors.cardBorder};
    margin: 1rem;
    display: flex;
    border-radius: 5px;
    width: 30rem;
    flex-direction: column;
    color: ${({theme}) => theme.colors.cardText};
    transition: color 320ms ease-in;
    margin: 0 0 5rem;

    .quote {
        padding: 1rem;
    }

    .title {
        padding-top: 1rem;
        text-align: center;
    }

    .header {
        border-bottom: 2px solid ${({theme}) => theme.colors.headerBottomBorder};
        display: flex;
        height: 55px;
        gap: .5rem;
        justify-content: center;
        align-items: center;
        position: relative;

        span {
            align-self: flex-end;
            position: absolute;
            right: 1rem;
            top: 35%;
        }
    } 
`

export const ThemeContainer = styled.div`
    background-color: #ffe;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 10px 25px;
    border-bottom: 1px solid hsl(0, 0%, 87%);
`

export const ThemeButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 1px solid hsl(0, 0%, 87%);
  border-radius: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px hsl(0, 0%, 87%);
`;
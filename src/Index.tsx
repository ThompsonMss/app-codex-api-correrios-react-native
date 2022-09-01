import { ThemeProvider } from 'styled-components'

import { useTheme } from './hooks/useTheme';
import { MainContext } from './context/MainContext';
import { Routers } from './routers';

export function IndexApp () {

    const [theme] = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <MainContext>
                <Routers />
            </MainContext>
        </ThemeProvider>

    );
}
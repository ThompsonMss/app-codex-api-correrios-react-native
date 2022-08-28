import { ThemeProvider } from 'styled-components'

import { useTheme } from './hooks/useTheme';
import { Routers } from './routers';

export function IndexApp () {

    const [theme] = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <Routers />
        </ThemeProvider>

    );
}
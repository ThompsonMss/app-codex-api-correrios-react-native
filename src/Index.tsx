import { SafeAreaView, View, Text, useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'

import { useTheme } from './hooks/useTheme';

export function IndexApp () {

    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{ flex: 1 }}>
                <Teste><Text>Testsdse</Text></Teste>
            </SafeAreaView>
        </ThemeProvider>

    );
}

const Teste = styled.View`
    background-color: ${(props) => props.theme.background};
    flex: 1;
    align-items: center;
    justify-content: center;
`
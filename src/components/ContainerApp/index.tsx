import { Platform, StatusBar } from "react-native";
import { useTheme } from "@hooks/useTheme";
import { Container } from "./styles";

export function ContainerApp ({ children }) {

    const [theme, colorScheme] = useTheme();

    const barStyle = colorScheme === "dark" ? "light-content" : "dark-content";

    return (
        <>
            <StatusBar backgroundColor={theme.background} barStyle={barStyle} />
            <Container>
                {children}
            </Container>
        </>

    );

}
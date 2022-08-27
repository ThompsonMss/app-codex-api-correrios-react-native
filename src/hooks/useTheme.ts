import { getTheme } from "@styles/themes";
import { useColorScheme } from "react-native";

export function useTheme () {

    const colorScheme = useColorScheme();
    const theme = getTheme(colorScheme)

    return theme;
}
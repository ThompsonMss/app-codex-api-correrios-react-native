import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

type TypesOfTheme = "dark" | "light" | null;

export function getTheme (typeOfTheme: TypesOfTheme) {

    switch (typeOfTheme) {
        case "dark":
            return darkTheme;
        case "light":
            return lightTheme;
        default:
            return darkTheme;
    }

}
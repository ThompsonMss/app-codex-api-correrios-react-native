import { design } from "@styles/design";
import { MagnifyingGlass, QrCode } from "phosphor-react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const ContainerSearchObject = styled.View`
    width: 100%;
    padding: ${design.paddingContainer};

    padding-top: 20px;
    margin-bottom: 16px;

    background-color: ${(props) => props.theme.background};
`

export const Diviser = styled.View`
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) => props.theme.backgroundInverse};

    margin-top: 16px;
`

export const ContainerInput = styled.View<{ isFocused: boolean }>`
    background-color: ${(props) => props.theme.backgroundInverse};
    
    border-width: 3px;
    border-style: solid;
    border-color: ${(props) => props.theme.backgroundInverse};

    width: 100%;
    height: 50px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: ${design.borderRadius};

    ${(props) => {
        if (props.isFocused) {
            return css`
                border-width: 3px;
                border-style: solid;
                border-color: ${props.theme.primary};
            `;
        }
    }}
`

export const IconQrCode = styled(QrCode).attrs(({ theme }) => ({
    color: theme.textFont,
    size: 28
}))``

export const IconMagnifyingGlass = styled(MagnifyingGlass).attrs(({ theme }) => ({
    color: theme.textFont,
    size: 28
}))``

export const Input = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.textFont,
    selectionColor: theme.textColorInput,
    returnKeyType: "search"
}))`

    flex: 1;
    height: 50px;

    font-size: 18px;
    color: ${(props) => props.theme.textColorInput};
`

export const Button = styled.TouchableOpacity`

    height: 50px;

    align-items: center;
    justify-content: center;

    padding: 0 8px;
`
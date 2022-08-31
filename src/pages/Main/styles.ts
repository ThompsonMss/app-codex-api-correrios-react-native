import styled from "styled-components/native"
import { design } from "@styles/design";
import { MagnifyingGlass, QrCode, XCircle } from "phosphor-react-native";
import { css } from "styled-components";

export const Scroll = styled.ScrollView`
    z-index: 2;
`

export const ContainerLogo = styled.View`
    width: 100%;
    height: 100px;

    margin-top: 10px;
    margin-bottom: -20px;

    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 60px;
`;

export const WaterMark = styled.View`
    z-index: 1;

    position: absolute;
    bottom: 0;
    right: -5px;
`;

export const ImgWaterMark = styled.Image`
    width: 280px;
    height: 280px;
`;

export const EmptyObject = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    padding: 20px;
`;

export const IconXcircle = styled(XCircle).attrs(({ theme }) => ({
    size: 90,
    color: theme.textFont
}))``;

export const TextEmptyObject = styled.Text`
    margin-top: 14px;

    font-size: 18px;
    color: ${(props) => props.theme.textFont};

    text-align: center;
`;

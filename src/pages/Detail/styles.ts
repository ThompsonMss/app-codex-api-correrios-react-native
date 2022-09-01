import { ActivityIndicator } from 'react-native';
import { ContainerApp } from "@components/ContainerApp";
import { CaretLeft, Pencil } from "phosphor-react-native";
import styled from "styled-components/native";

export const ContainerPage = styled.View`
    padding: 0px 20px;
    padding-bottom: 20px;
    flex: 1;
`

export const HeaderNavigation = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 15px 0px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) => props.theme.backgroundInverse};
`;

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 0,
        flexGrow: 1
    }
})`
    margin-bottom: 20px;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    z-index: 2;
`;

export const IconCaretLeft = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.textFont
}))``;

export const ContainerLabelHeader = styled.Text`
    font-size: 18px;
    color: ${(props) => props.theme.textFont};

    margin-left: -32px;
    z-index: 1;

    flex: 1;
    text-align: center;
`;

export const ContainerNameOfObject = styled.View`
    
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 20px 0px;
`;

export const ContainerLabelNameOfObject = styled.Text`
    font-size: 20px;
    color: ${(props) => props.theme.textColorInput};

    margin-right: -24px;
    z-index: 1;

    flex: 1;
    text-align: center;
`;

export const ButtonEdit = styled.TouchableOpacity`
    z-index: 2;
`;

export const IconPencil = styled(Pencil).attrs(({ theme }) => ({
    size: 24,
    color: theme.primary
}))``;

export const TypeOfDelivery = styled.View`
    background-color: ${(props) => props.theme.backgroundInverse};
    
    width: 100%;
    height: 40px;

    border-radius: 4px;

    align-items: center;
    justify-content: center;

    margin-bottom: 40px;
`

export const LabelTypeOfDelivery = styled.Text`
    font-size: 16px;
    font-weight: bold;

    text-transform: uppercase;

    color:  ${(props) => props.theme.textFont};
`
export const DescribleOfObject = styled.View`
    padding: 16px 0px 16px 28px;
    
    margin-left: 8px;

    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${(props) => props.theme.backgroundInverse};

    position: relative;
`;

export const TextDescrible = styled.Text`
    font-size: 14px;
    color: ${(props) => props.theme.textColorInput};

    margin-bottom: 8px;
`;

export const DatePostagemDescrible = styled.Text`
    font-size: 12px;
    color: ${(props) => props.theme.textFont};
`;

export const BadgeStatus = styled.View`
    width: 18px;
    height: 18px;

    border-radius: 9px;

    background: ${(props) => props.theme.secondary};

    position: absolute;
    left: -10px;
    top: 57%;
`;

export const ContainerLoading = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Indicator = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.textFont,
    size: 'large'
}))``;
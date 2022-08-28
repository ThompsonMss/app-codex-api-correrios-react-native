import { CaretRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 107px;

    padding: 0 20px;
    margin-bottom: 16px;

    flex-direction: row;
`

type typeOfStatus = "primary" | "success";

export const StatusObject = styled.View<{ status: typeOfStatus }>`
    width: 5px;
    height: 107px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    background-color: ${(props) => props.theme[props.status]};
`
export const Information = styled.View`

    flex: 1;
    height: 107px;

    background-color: ${(props) => props.theme.backgroundInverse};

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const ContainerIcon = styled.View`
    height: 100%;
    width: 80px;

    padding: 0px 12px;

    align-items: center;
    justify-content: center;
`

export const Icon = styled.View`
    width: 56px;
    height: 56px;

    background-color: ${(props) => props.theme.colorBorder};

    border-radius: 100px;

    align-items: center;
    justify-content: center;
`

export const ImgIcon = styled.Image`
    width: 32px;
    height: 32px;
`

export const WrapperInfo = styled.View`

    flex: 1;

`

const BaseTextFont = styled.Text`
    color: ${(props) => props.theme.textFont};
    margin-bottom: 6px;
`;

export const NameOfObject = styled(BaseTextFont)`
    font-size: 14px;
`

export const CodeOfObject = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.textColorInput};
    margin-bottom: 6px;
`

export const DescCurrentStatus = styled(BaseTextFont)`
    font-size: 12px;
`

export const DatePostagenObject = styled(BaseTextFont)`
    font-size: 12px;
`

export const IconCaretRight = styled(CaretRight).attrs(({ theme }) => ({
    size: 20,
    color: theme.textFont
}))``

export const Action = styled.View`
    height: 107px;

    align-items: flex-start;
    justify-content: center;

    padding-right: 5px;
`

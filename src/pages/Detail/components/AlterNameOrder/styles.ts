import { XCircle } from 'phosphor-react-native';
import { Modalize } from 'react-native-modalize'
import { css } from 'styled-components';
import styled from 'styled-components/native'

export const Modal = styled(Modalize).attrs(({ theme }) => ({
    modalHeight: 220,
    snapPoint: 220,
    modalStyle: { backgroundColor: theme.backgroundInverse },
    handleStyle: { backgroundColor: 'transparent' },
}))``;

export const ContainerModal = styled.View`
    padding: 25px 20px 20px 20px;

    width: 100%;
`;

export const Header = styled.View`

    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.Text`
    font-size: 16px;

    color: ${(props) => props.theme.textColorInput};
`;

export const ButtonClose = styled.TouchableOpacity``;

export const IconXCircle = styled(XCircle).attrs(({ theme }) => ({
    color: theme.textColorInput,
    size: 28
}))``;

export const Input = styled.TextInput<{ focused: boolean }>`
    height: 47px;
    width: 100%;

    background-color: ${(props) => props.theme.colorBorder};

    margin-top: 20px;
    margin-bottom: 26px;

    color: ${(props) => props.theme.textColorInput};
    padding: 14px;
    font-size: 18px;

    border-radius: 8px;
    border-width: 3px;
    border-style: solid;
    border-color:  ${(props) => props.theme.colorBorder};

    ${(props) => {
        if (props.focused) {
            return css`
                border-color:  ${(props) => props.theme.primary};
                border-width: 3px;
                border-style: solid;
            `;
        }
    }};
`;
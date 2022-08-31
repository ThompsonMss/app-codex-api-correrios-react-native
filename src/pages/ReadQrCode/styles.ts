import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #070707;
`;

export const ContainerNotPermission = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.background};

    padding: 20px;
`;

export const ContainerMask = styled.View`
    position: relative;
    height: 100%;
`;

export const Mask = styled.View`
    position: absolute;
    z-index: 1;
    margin-top: 63px;

    width: 100%;
    height: 100%;
`;

const ViewBackgroundColorMask = styled.View`
    background-color: rgba(7, 7, 7, .8);
`;

export const TopMask = styled(ViewBackgroundColorMask)`
    width: 100%;
    flex: 1;

    align-items: center;
    justify-content: flex-end;
    
    padding: 0px 20px 40px 20px;
`;

export const TextTopMask = styled.Text`
    font-size: 16px;
    color: #DDD;

    text-align: center;
`;

export const CenterMask = styled.View`
    flex-direction: row;
`;

export const FillCenter = styled(ViewBackgroundColorMask)`
    flex: 1;
    width: 100%;
    height: 150px;
`;

export const FillCenterMask = styled.View`
    width: 150px;
    height: 150px;

    border-color: #DDD;
    border-width: 5px;
    border-style: solid;
`;

export const BottomMask = styled(ViewBackgroundColorMask)`
    width: 100%;
    flex: 1.5;
`;

export const HeaderNavigation = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 15px 20px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #262626;

    background: #070707;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    z-index: 2;
`;

export const IconCaretLeft = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: '#808080'
}))``;

export const ContainerLabelHeader = styled.Text`
    font-size: 18px;
    color: #808080;

    z-index: 1;

    flex: 1;
    text-align: left;
`;


export const TextNotPermission = styled.Text`
    font-size: 18px;
    text-align: center;

    color: ${(props) => props.theme.textFont};
`;
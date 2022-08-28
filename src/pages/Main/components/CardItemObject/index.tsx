import {
    Action,
    CodeOfObject,
    Container,
    ContainerIcon,
    DatePostagenObject,
    DescCurrentStatus,
    Icon,
    IconCaretRight,
    ImgIcon,
    Information,
    NameOfObject,
    StatusObject,
    WrapperInfo
} from "./styles";

import favicon from "@assets/favicon.png";
import { CaretRight } from "phosphor-react-native";

export function CardItemObject () {
    return (
        <Container>
            <StatusObject status="primary" />
            <Information>
                <ContainerIcon>
                    <Icon><ImgIcon source={favicon} /></Icon>
                </ContainerIcon>

                <WrapperInfo>
                    <NameOfObject>Encomenda 01</NameOfObject>
                    <CodeOfObject>LB2021343434P9</CodeOfObject>
                    <DescCurrentStatus>Objeto em trâsito. Por favor aguarda na...</DescCurrentStatus>
                    <DatePostagenObject>10/07/2022</DatePostagenObject>
                </WrapperInfo>

                <Action>
                    <IconCaretRight />
                </Action>

            </Information>
        </Container>
    );
}
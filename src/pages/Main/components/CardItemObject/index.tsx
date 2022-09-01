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

import { InterfaceObject } from "../../../../reducers/mainReducer";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

interface InterfaceCardItemObject {
    onPress: (...args: any) => any,
    object: InterfaceObject
}

export function CardItemObject ({ onPress, object }: InterfaceCardItemObject) {

    return (
        <Container onPress={onPress}>
            <StatusObject status={object.currentStatus === "ENTREGUE" ? "success" : "primary"} />
            <Information>
                <ContainerIcon>
                    <Icon><ImgIcon source={{ uri: "https://proxyapp.correios.com.br" + object.lastUrlIcon }} /></Icon>
                </ContainerIcon>

                <WrapperInfo>
                    <NameOfObject>{object.aliasOfObject}</NameOfObject>
                    <CodeOfObject>{object.codeOfObject}</CodeOfObject>
                    <DescCurrentStatus numberOfLines={1}>{object.lastDescOfObject}...</DescCurrentStatus>
                    <DatePostagenObject>{format(parseISO(object.lastDateOfObject), "dd/MM/yyyy", { locale: pt })}</DatePostagenObject>
                </WrapperInfo>

                <Action>
                    <IconCaretRight />
                </Action>

            </Information>
        </Container>
    );
}
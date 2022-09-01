import React, { useContext, useEffect, useState } from "react";
import {
    ButtonEdit,
    ButtonGoBack,
    ContainerLabelHeader,
    ContainerLabelNameOfObject,
    ContainerPage,
    ContainerNameOfObject,
    HeaderNavigation,
    IconCaretLeft,
    IconPencil,
    TypeOfDelivery,
    LabelTypeOfDelivery,
    DescribleOfObject,
    TextDescrible,
    DatePostagemDescrible,
    BadgeStatus,
    Scroll,
    ContainerLoading,
    Indicator
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import { ButtonWithIcon } from "@components/ButtonWithIcon";
import { AlterNameOrder } from "./components/AlterNameOrder";

import { Modalize } from "react-native-modalize";
import { useSearchObject } from "@hooks/useSearchObject";
import { Alert } from "react-native";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { ObjectContext } from "../../context/MainContext";

export function Detail({ navigation, route }) {

    const { updateAliasObject, updateLastEventAndStatusObject, deleteObject } = useContext(ObjectContext);

    const modalizeRef = React.useRef<Modalize>(null);

    const uuid = route.params.uuid;
    const aliasOfObject = route.params.aliasOfObject;
    const codeOfObject = route.params.codeOfObject;
    const typeOfDelivery = route.params.typeOfDelivery;

    const { error, loading, object } = useSearchObject(codeOfObject);

    const [nameObject, setNameObject] = useState(aliasOfObject);

    function handleEditNameOfOrder() {
        modalizeRef.current?.open();
    };

    function handleConfirmDelete() {
        Alert.alert('Atenção', 'Tem certeza que deseja remover esse objeto?', [
            {
                text: 'Cancelar',
                onPress: () => null
            },
            {
                text: 'Sim, quero remover',
                onPress: () => {
                    deleteObject({ uuid: uuid });
                    navigation.navigate('ConfirmedDelete');
                }
            }
        ], { cancelable: false });
    }

    useEffect(() => {
        if (error) {
            Alert.alert('Atenção', error);
            navigation.goBack();
        }
    }, [error]);

    function updateLastEventOfObject() {

        const lastEvent = object.eventos.shift();

        updateLastEventAndStatusObject({
            uuid: uuid,
            data: {
                currentStatus: lastEvent.codigoStatus === "BDE" ? "ENTREGUE" : "PENDENTE",
                lastDateOfObject: lastEvent.dataStatus,
                lastDescOfObject: lastEvent.descricao,
                lastUrlIcon: lastEvent.urlIcone
            }
        });

    }

    useEffect(() => {
        if (object !== null) {
            updateLastEventOfObject();
        }
    }, [object]);


    function alterNameOfObject(newName: string) {
        updateAliasObject({ uuid: uuid, newAlias: newName });
        setNameObject(newName);
    }

    return (
        <>
            <ContainerApp>
                <ContainerPage>

                    <HeaderNavigation>
                        <ButtonGoBack onPress={navigation.goBack}>
                            <IconCaretLeft />
                        </ButtonGoBack>
                        <ContainerLabelHeader>{codeOfObject}</ContainerLabelHeader>
                    </HeaderNavigation>

                    <Scroll>

                        <ContainerNameOfObject>
                            <ContainerLabelNameOfObject>{nameObject}</ContainerLabelNameOfObject>
                            <ButtonEdit onPress={handleEditNameOfOrder}>
                                <IconPencil />
                            </ButtonEdit>
                        </ContainerNameOfObject>

                        <TypeOfDelivery>
                            <LabelTypeOfDelivery>{typeOfDelivery}</LabelTypeOfDelivery>
                        </TypeOfDelivery>

                        {loading && (
                            <ContainerLoading>
                                <Indicator />
                            </ContainerLoading>
                        )}

                        {object?.eventos.map(evento => (
                            <DescribleOfObject>
                                <BadgeStatus />
                                <TextDescrible>{evento.descricao}{evento.unidadeOrigem.tipo && evento.unidadeOrigem.endereco ? `. De ${evento.unidadeOrigem.tipo} em ${evento.unidadeOrigem.endereco}` : ''}{evento?.unidadeDestino ? ` para ${evento.unidadeDestino.tipo} em ${evento.unidadeDestino.endereco}.` : '.'}</TextDescrible>
                                <DatePostagemDescrible>{format(parseISO(evento.dataStatus), "dd/MM/yyyy HH:mm", { locale: pt })}</DatePostagemDescrible>
                            </DescribleOfObject>
                        ))}

                    </Scroll>

                    <ButtonWithIcon
                        icon="trash"
                        label="Remover Objeto"
                        onPress={handleConfirmDelete}
                    />

                </ContainerPage>
            </ContainerApp>

            <AlterNameOrder
                refModal={modalizeRef}
                nameOfObject={aliasOfObject}
                onAction={alterNameOfObject}
            />

        </>
    );
}
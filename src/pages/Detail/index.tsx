import React from "react";
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
    Scroll
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import { ButtonWithIcon } from "@components/ButtonWithIcon";
import { AlterNameOrder } from "./components/AlterNameOrder";

import { Modalize } from "react-native-modalize";

export function Detail ({ navigation, route }) {

    const modalizeRef = React.useRef<Modalize>(null);

    const aliasOfObject = route.params.aliasOfObject;
    const codeOfObject = route.params.codeOfObject;
    const typeOfDelivery = route.params.typeOfDelivery;
    const uuid = route.params.uuid;

    function handleEditNameOfOrder () {
        modalizeRef.current?.open();
    };

    function handleConfirmDelete () {
        navigation.navigate('ConfirmedDelete');
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
                            <ContainerLabelNameOfObject>{aliasOfObject}</ContainerLabelNameOfObject>
                            <ButtonEdit onPress={handleEditNameOfOrder}>
                                <IconPencil />
                            </ButtonEdit>
                        </ContainerNameOfObject>

                        <TypeOfDelivery>
                            <LabelTypeOfDelivery>{typeOfDelivery}</LabelTypeOfDelivery>
                        </TypeOfDelivery>

                        <DescribleOfObject>
                            <BadgeStatus />
                            <TextDescrible>Obejeto em trânsito - por favor aguarde de Unidade de Tratamento  Curitiba/PR para unidade de Tratamento em BRASILIA/DF.</TextDescrible>
                            <DatePostagemDescrible>18/07/2022 19:22</DatePostagemDescrible>
                        </DescribleOfObject>

                        <DescribleOfObject>
                            <BadgeStatus />
                            <TextDescrible>Obejeto em trânsito - por favor aguarde de Unidade.</TextDescrible>
                            <DatePostagemDescrible>18/07/2022 19:22</DatePostagemDescrible>
                        </DescribleOfObject>

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
            />

        </>
    );
}
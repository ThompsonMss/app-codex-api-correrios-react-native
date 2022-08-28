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

export function Detail () {
    return (
        <ContainerApp>
            <ContainerPage>

                <HeaderNavigation>
                    <ButtonGoBack>
                        <IconCaretLeft />
                    </ButtonGoBack>
                    <ContainerLabelHeader>LB2021345445P8</ContainerLabelHeader>
                </HeaderNavigation>

                <Scroll>
                    <ContainerNameOfObject>
                        <ContainerLabelNameOfObject>Encomenda 01</ContainerLabelNameOfObject>
                        <ButtonEdit>
                            <IconPencil />
                        </ButtonEdit>
                    </ContainerNameOfObject>

                    <TypeOfDelivery>
                        <LabelTypeOfDelivery>Prime Exprés</LabelTypeOfDelivery>
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

            </ContainerPage>
        </ContainerApp>
    );
}
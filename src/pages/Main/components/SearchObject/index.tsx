import { useContext, useState } from "react";
import { Alert } from "react-native";

import {
    Button,
    ContainerInput,
    ContainerSearchObject,
    Diviser,
    IconMagnifyingGlass,
    IconQrCode,
    Indicator,
    Input
} from "./styles";

import { apiCorreios } from '../../../../services/apiCorreios';
import { ObjectContext } from "../../../../context/MainContext";
import { parseISO } from "date-fns";

export function SearchObject ({ navigation }: any) {

    const { objects, insertObject } = useContext(ObjectContext);

    const [codeObject, setCodeObject] = useState('');
    const [onFocusInput, setOnFocusInput] = useState(false);

    const [load, setLoad] = useState(false);

    function handleGoToReadQrCode () {
        navigation.navigate('ReadQrCode')
    }

    async function handleSearchObject () {
        try {

            setLoad(true);

            const data = await apiCorreios.obterDadosRastreioObjeto(codeObject);
            const lastEvent = data.eventos.shift();

            insertObject({
                aliasOfObject: `Encomenda ${objects.length + 1}`,
                codeOfObject: codeObject,
                currentStatus: lastEvent.codigoStatus === "BDE" ? "ENTREGUE" : "PENDENTE",
                lastDateOfObject: parseISO(lastEvent.dataStatus),
                lastDescOfObject: lastEvent.descricao,
                typeOfDelivery: data.typeOfDelivery,
                lastUrlIcon: lastEvent.urlIcone
            });

            Alert.alert('Tudo certo', 'Sua encomenda foi adicionada.');
            setCodeObject('');

        } catch (e) {
            Alert.alert('Atenção', e.message);
        } finally {
            setLoad(false);
        }
    }

    return (
        <ContainerSearchObject>
            <ContainerInput isFocused={onFocusInput}>

                <Button onPress={handleGoToReadQrCode}><IconQrCode /></Button>

                <Input
                    placeholder="Código de rastreio"
                    onBlur={() => setOnFocusInput(false)}
                    onFocus={() => setOnFocusInput(true)}
                    value={codeObject}
                    onChangeText={text => setCodeObject(text)}
                    onSubmitEditing={load ? () => null : handleSearchObject}
                />

                <Button onPress={load ? () => null : handleSearchObject}>
                    {load ? <Indicator /> : <IconMagnifyingGlass />}
                </Button>

            </ContainerInput>

            <Diviser />
        </ContainerSearchObject>
    );
}
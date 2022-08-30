import { useState } from "react";

import {
    Button,
    ContainerInput,
    ContainerSearchObject,
    Diviser,
    IconMagnifyingGlass,
    IconQrCode,
    Input
} from "./styles";

export function SearchObject ({ navigation }: any) {

    const [onFocusInput, setOnFocusInput] = useState(false);

    function handleGoToReadQrCode () {
        navigation.navigate('ReadQrCode')
    }

    return (
        <ContainerSearchObject>
            <ContainerInput isFocused={onFocusInput}>

                <Button onPress={handleGoToReadQrCode}><IconQrCode /></Button>

                <Input
                    placeholder="Código de rastreio"
                    onBlur={() => setOnFocusInput(false)}
                    onFocus={() => setOnFocusInput(true)}
                />

                <Button><IconMagnifyingGlass /></Button>

            </ContainerInput>

            <Diviser />
        </ContainerSearchObject>
    );
}
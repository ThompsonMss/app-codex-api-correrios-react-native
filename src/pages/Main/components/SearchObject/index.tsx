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

export function SearchObject () {

    const [onFocusInput, setOnFocusInput] = useState(false);

    return (
        <ContainerSearchObject>
            <ContainerInput isFocused={onFocusInput}>

                <Button><IconQrCode /></Button>

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
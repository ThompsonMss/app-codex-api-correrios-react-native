import {
    Button,
    ContainerInput,
    ContainerLogo,
    ContainerSearchObject,
    IconMagnifyingGlass,
    IconQrCode,
    Input,
    Logo,
    Scroll
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import logotipo from "@assets/images/logotipo.png"
import { useState } from "react";

export function Main () {

    const [onFocusInput, setOnFocusInput] = useState(false);

    return (
        <ContainerApp>
            <Scroll>

                <ContainerLogo>
                    <Logo source={logotipo} />
                </ContainerLogo>

                <ContainerSearchObject>

                    <ContainerInput
                        isFocused={onFocusInput}
                    >
                        <Button>
                            <IconQrCode />
                        </Button>
                        <Input
                            placeholder="Código de rastreio"
                            onBlur={() => setOnFocusInput(false)}
                            onFocus={() => setOnFocusInput(true)}
                        />
                        <Button>
                            <IconMagnifyingGlass />
                        </Button>
                    </ContainerInput>
                </ContainerSearchObject>

            </Scroll>

        </ContainerApp>
    );
}
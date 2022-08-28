import {
    Scroll,
    ContainerLogo,
    Logo
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import { SearchObject } from "./components/SearchObject";

import logotipo from "@assets/images/logotipo.png"
import { CardItemObject } from "./components/CardItemObject";

export function Main () {

    return (
        <ContainerApp>
            <Scroll stickyHeaderIndices={[1]}>
                <ContainerLogo><Logo source={logotipo} /></ContainerLogo>
                <SearchObject />

                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
                <CardItemObject />
            </Scroll>
        </ContainerApp>
    );
}
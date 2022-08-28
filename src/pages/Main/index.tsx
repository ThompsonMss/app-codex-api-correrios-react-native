import {
    Scroll,
    ContainerLogo,
    Logo
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import { SearchObject } from "./components/SearchObject";

import logotipo from "@assets/images/logotipo.png"
import { CardItemObject } from "./components/CardItemObject";

export function Main ({ navigation }) {

    function handleGoToDetail () {
        navigation.navigate('Detail')
    }

    return (
        <ContainerApp>
            <Scroll stickyHeaderIndices={[1]}>
                <ContainerLogo><Logo source={logotipo} /></ContainerLogo>
                <SearchObject />

                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
                <CardItemObject onPress={handleGoToDetail} />
            </Scroll>
        </ContainerApp>
    );
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Main } from "@pages/Main";
import { Detail } from "@pages/Detail";
import { ReadQrCode } from "@pages/ReadQrCode";
import { ConfirmedDelete } from "@pages/ConfirmedDelete";

export function Routers () {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="ReadQrCode" component={ReadQrCode} />
                <Stack.Screen name="ConfirmedDelete" component={ConfirmedDelete} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
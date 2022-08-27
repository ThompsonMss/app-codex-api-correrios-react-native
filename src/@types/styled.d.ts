// styled.d.ts
import { InterfaceTheme } from '@src/styles/themes/InterfaceTheme';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends InterfaceTheme { }
}
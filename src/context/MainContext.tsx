import React, { ReactNode } from 'react'

import {
    mainReducer,
    InterfaceDeleteObjectAction,
    InterfaceObject,
    InterfaceUpdateAliasObjectAction,
    InterfaceUpdateLastEventAndStatusObjectAction,
    deleteObjectAction,
    insertObjectAction,
    updateAliasObjectAction,
    updateLastEventAndStatusObjectAction,
    popularListAction
} from '../reducers/mainReducer';

interface InterfaceMainContext {
    children: ReactNode
}

interface InterfaceObjectContext {
    objects: InterfaceObject[],
    insertObject: (data: Omit<InterfaceObject, 'uuid'>) => void;
    deleteObject: (data: InterfaceDeleteObjectAction) => void;
    updateAliasObject: (data: InterfaceUpdateAliasObjectAction) => void;
    updateLastEventAndStatusObject: (data: InterfaceUpdateLastEventAndStatusObjectAction) => void;
    popularList: (dataObjects: InterfaceObject[]) => void;
}

export const ObjectContext = React.createContext({} as InterfaceObjectContext);

export function MainContext({ children }: InterfaceMainContext) {


    const initialStatte: InterfaceObject[] = [];
    const [state, dispatch] = React.useReducer(mainReducer, initialStatte);

    function popularList(dataObjects: InterfaceObject[]) {
        dispatch(popularListAction(dataObjects));
    }

    function insertObject(data: Omit<InterfaceObject, 'uuid'>) {
        const uuid = String(new Date().getTime() + Math.random());
        dispatch(insertObjectAction({ ...data, uuid: uuid }));
    }

    function deleteObject(data: InterfaceDeleteObjectAction) {
        dispatch(deleteObjectAction(data));
    }

    function updateAliasObject(data: InterfaceUpdateAliasObjectAction) {
        dispatch(updateAliasObjectAction(data));
    }

    function updateLastEventAndStatusObject(data: InterfaceUpdateLastEventAndStatusObjectAction) {
        dispatch(updateLastEventAndStatusObjectAction(data));
    }

    return (
        <ObjectContext.Provider
            value={{
                deleteObject,
                insertObject,
                updateAliasObject,
                updateLastEventAndStatusObject,
                popularList,
                objects: state
            }}
        >
            {children}
        </ObjectContext.Provider>
    );

}
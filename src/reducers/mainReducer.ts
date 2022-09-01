import { produce } from 'immer';

/**
 * Types
 */

enum Types {
    INSERT_OBJECT = "INSERT_OBJECT",
    DELETE_OBJECT = "DELETE_OBJECT",
    UPDATE_ALIAS_OBJECT = "UPDATE_ALIAS_OBJECT",
    UPDATE_LAST_EVENT_AND_STATUS_OBJECT = "UPDATE_LAST_EVENT_AND_STATUS_OBJECT"
}

/**
 * Reducer
 */

export interface InterfaceObject {
    uuid: string;
    aliasOfObject: string;
    codeOfObject: string;
    typeOfDelivery: string;
    currentStatus: string;
    lastDateOfObject: string;
    lastDescOfObject: string;
    lastUrlIcon: string;
}

export function mainReducer(state: InterfaceObject[], action: { type: Types, payload: any }) {
    switch (action.type) {
        case Types.INSERT_OBJECT:
            return produce(state, draft => {
                draft.unshift(action.payload);
            });
        case Types.DELETE_OBJECT:
            return produce(state, draft => {
                draft.splice(draft.findIndex(object => object.uuid === action.payload.uuid), 1);
            });
        case Types.UPDATE_ALIAS_OBJECT:
            return produce(state, draft => {
                draft.forEach(object => {
                    if (object.uuid === action.payload.uuid) {
                        object.aliasOfObject = action.payload.newAlias;
                    }
                });
            });
        case Types.UPDATE_LAST_EVENT_AND_STATUS_OBJECT:
            return produce(state, draft => {
                draft.forEach(object => {
                    if (object.uuid === action.payload.uuid) {
                        object.currentStatus = action.payload.data.currentStatus;
                        object.lastDateOfObject = action.payload.data.lastDateOfObject;
                        object.lastDescOfObject = action.payload.data.lastDescOfObject;
                        object.lastUrlIcon = action.payload.data.lastUrlIcon;
                    }
                });
            });
        default:
            return state;
    }
}

/**
 * Actions
 */

export function insertObjectAction(data: InterfaceObject) {
    return { type: Types.INSERT_OBJECT, payload: data }
}

export interface InterfaceDeleteObjectAction {
    uuid: string
}

export function deleteObjectAction(data: InterfaceDeleteObjectAction) {
    return { type: Types.DELETE_OBJECT, payload: { uuid: data.uuid } }
}

export interface InterfaceUpdateAliasObjectAction {
    uuid: string;
    newAlias: string;
}

export function updateAliasObjectAction(data: InterfaceUpdateAliasObjectAction) {
    return { type: Types.UPDATE_ALIAS_OBJECT, payload: { uuid: data.uuid, newAlias: data.newAlias } }
}

export interface InterfaceUpdateLastEventAndStatusObjectAction {
    uuid: string;
    data: Omit<InterfaceObject, 'uuid' | 'aliasOfObject' | 'codeOfObject' | 'typeOfDelivery'>;
}

export function updateLastEventAndStatusObjectAction(data: InterfaceUpdateLastEventAndStatusObjectAction) {
    return {
        type: Types.UPDATE_LAST_EVENT_AND_STATUS_OBJECT,
        payload: {
            uuid: data.uuid,
            data: data.data
        }
    }
}
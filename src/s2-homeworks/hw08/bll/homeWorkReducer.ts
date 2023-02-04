import {UserType} from '../HW8'

const initialState: UserType[] = []

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    const cloneState = [...state]
    switch (action.type) {
        case 'sort': {
            return cloneState.sort((a,b) => action.payload === 'up'
                ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
                : a.name.toLowerCase() > b.name.toLowerCase() ?  -1 : 1
            ) // need to fix
        }
        case 'check': {
            return state.filter(e =>  e.age >= action.payload)
        }
        default:
            return cloneState
    }
}

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }
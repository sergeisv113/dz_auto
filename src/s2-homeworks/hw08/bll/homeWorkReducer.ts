import {UserType} from '../HW8'

const initialState: UserType[] = []

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {

        case 'sort': {
            let clone = [...state]
            switch(action.payload) {
                case "up": {
                    return clone.sort((a, b) => (a.name < b.name ? -1 : 1));
                }
                case 'down': {
                    return clone.sort((a, b) => (a.name > b.name ? -1 : 1));
                }
            }
        }
        case 'check': {
            return state.filter(state => state.age >= 18)
        }
        default:
            return state
    }
}
/*export const sortUpUsersAC = (initialState: UserType[]) => ({type: 'sort', payload: 'up' })
export const sortDownUsersAC = (initialState: UserType[]) => ({type: 'sort', payload: 'down' })

export const sortAgeUsersAC = (initialState: UserType[]) => ({type: 'sort', payload: 'number' })*/

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }
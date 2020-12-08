import {createStore} from 'redux';
import rootReducer from './rootReducer';

const preloadedState = {
    entities: {
        notes: {
            byId: {
                '1': {
                    id: 1,
                    text: "Заметка 1",
                    tags: [1]
                },
                '2': {
                    id: 2,
                    text: "Заметка 2",
                    tags: [1, 4]
                },
                '3': {
                    id: 3,
                    text: "Заметка 3",
                    tags: [1,2,3,4]
                },
                '4': {
                    id: 4,
                    text: "Заметка 4",
                    tags: [3,2]
                }
            },
            allIds: ['1', '2', '3', '4']
        },
        tags: {
            byId: {
                '1': {
                    id: 1,
                    text: 'природа'
                },
                '2': {
                    id: 2,
                    text: 'животные'
                },
                '3': {
                    id: 3,
                    text: 'техника'
                },
                '4': {
                    id: 4,
                    text: 'психология'
                }
            },
            allIds: ['1', '2', '3', '4']
        }
    },
    noteInProgress: {
        text: 'test',
        tags: []
    }
}
const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;
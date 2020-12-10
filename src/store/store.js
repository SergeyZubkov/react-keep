import {createStore} from 'redux';
import rootReducer from './rootReducer';

const preloadedState = {
    entities: {
        notes: {
            byId: {
                '1': {
                    id: "1",
                    text: "Заметка #природа",
                    tags: ["1"]
                },
                '2': {
                    id: "2",
                    text: "Заметка #природа #техника",
                    tags: ["1", "4"]
                },
                '3': {
                    id: "3",
                    text: "Заметка #природа #животные #техника #психология",
                    tags: ["1","2","3","4"]
                },
                '4': {
                    id: "4",
                    text: "Заметка #техника #животные",
                    tags: ["3","2"]
                }
            },
            allIds: ['1', '2', '3', '4']
        },
        tags: {
            byId: {
                '1': {
                    id: "1",
                    text: 'природа'
                },
                '2': {
                    id: "2",
                    text: 'животные'
                },
                '3': {
                    id: "3",
                    text: 'техника'
                },
                '4': {
                    id: "4",
                    text: 'психология'
                }
            },
            allIds: ['1', '2', '3', '4']
        }
    },
    noteForm: null,
    noteListFilterByTag: '',
    isViewMode: true
}
const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;
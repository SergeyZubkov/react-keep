import { combineReducers } from "redux";
import notes from "./notesReducer";
import tags from './tagsReducers';
import editedNote from './editedNote';
import noteListFilterByTag from './noteListFilterByTagReducer';
import isViewMode from './isViewModeReducer';

export default combineReducers({
    entities: combineReducers({
        notes,
        tags
    }),
    editedNote,
    noteListFilterByTag,
    isViewMode
})
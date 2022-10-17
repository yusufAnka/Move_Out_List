import { configureStore } from '@reduxjs/toolkit';
import RoomReducer from './reducer/moveOutListReducer';

export default configureStore({
  reducer: {
    room: RoomReducer,
  },
});

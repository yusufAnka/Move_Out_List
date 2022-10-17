import { createSlice } from "@reduxjs/toolkit";
import rooms from "../reducer/MoveOutList.json";


const initialState = {
    rooms: rooms
}

const roomSlice = createSlice({
    name: "rooms",
    initialState: initialState,
    reducers: {
        increaseRooms: (state, action) => {
            const { id } = action.payload;
            const index = state.rooms.findIndex((room) => room.id === id);

            let newRoom = [...state.rooms];

            
            if (index >= 0) {
                newRoom.splice(index, 1)
            }

            

            state.rooms = [state.rooms[index], ...newRoom];
        },
        decreaseRooms: (state, action) => {
            const { id } = action.payload.id;
            console.log(id);
        },
    }
})


export const { increaseRooms, decreaseRooms } = roomSlice.actions;


export default roomSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritesList: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToFavorites: (state, { payload }) => {
            if (
                !state.favoritesList.find(
                    (favorite) => favorite.uuid === payload.uuid
                )
            ) {
                state.favoritesList.push(payload);
            }
        },
        removeToFavorites: (state, { payload }) => {
            state.favoritesList = state.favoritesList.filter(
                (favorite) => favorite.uuid !== payload
            );
        },
    },
});

export const { addToFavorites, removeToFavorites } = userSlice.actions;

export default userSlice.reducer;

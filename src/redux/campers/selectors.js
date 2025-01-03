export const selectCampersList = (state) => state.campers.items;

export const selectCamper = (state) => state.campers.item;

export const selectTotal = (state) => state.campers.total;

export const selectError = (state) => state.campers.error;

export const selectLoading = (state) => state.campers.loading;

export const selectFavorites = (state) => state.campers.favorites;

export const selectFilters = (state) => state.campers.filters;

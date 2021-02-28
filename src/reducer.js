export const initialState = {
  user: null,
  // token:
  //   'BQDSdEG2buxSzZne6R8f25Gco51HnKe9qHu4P3t2xD2931xVeGe7ttlt42kK-NyuLEtzkNFHwbZ3-HKV7XPIZqIqEaCN5mHYtJtqQq8S8HvCjioIV2-f-XsVOsUtRMEfplp0hWqkVIhWG_cn0Y0Ob_ZAfuzHwA2pQfOJDZJBwRbdiTKXYefi',
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  // action -> type, [payload]
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

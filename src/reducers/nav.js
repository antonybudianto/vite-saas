const initialState = {
  collapsed: true,
  showUserDropdown: false
};

const TOGGLE_COLLAPSE = 'APP/TOGGLE_COLLAPSE';
const TOGGLE_USER_DROPDOWN = 'APP/TOGGLE_USER_DROPDOWN';

const navReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_COLLAPSE: {
      return {
        ...state,
        collapsed: !state.collapsed
      };
    }
    case TOGGLE_USER_DROPDOWN: {
      return {
        ...state,
        showUserDropdown: !state.showUserDropdown
      };
    }
    default:
      return state;
  }
};

export function toggleCollapse() {
  return {
    type: TOGGLE_COLLAPSE
  };
}

export function toggleUserDropdown() {
  return {
    type: TOGGLE_USER_DROPDOWN
  };
}

export default navReducer;

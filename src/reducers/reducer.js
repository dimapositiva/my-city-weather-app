import { combineReducers } from 'redux';

const locationReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.location;

    default:
      return state;
  }
};

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return action.data;

    default:
      return state;
  }
};

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
};

const toggleCityFormReducer = (state = false, action) => {
  switch (action.type) {
    case 'CLICK_TOGGLE_CITY_FORM':
      return action.toggleCityForm;

    default:
      return state;
  }
};

const cityListReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_CITIES':
      return action.cities;

    case 'ADD_NEW_CITY':
      return [
        ...state, action.data
      ];

    default:
      return state;
  }
};

const loadingStatusReducer = (state = null, action) => {
  switch (action.type) {
    case 'WEATHER_IS_LOADING':
      return action.loadingStatus;

    default:
      return state;
  }
};

const reducer = combineReducers({
  location: locationReducer,
  data: dataReducer,
  name: nameReducer,
  toggleCityForm: toggleCityFormReducer,
  cityList: cityListReducer,
  loadingStatus: loadingStatusReducer
});

export default reducer;

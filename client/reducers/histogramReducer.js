const initialState = {
  histogramData: [['Domain', 'Length']]
};

const histogramReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_HISTOGRAM':
      return Object.assign({}, state, { histogramData: action.histogramData });

    default:
      return state
  }
};

export default histogramReducer;

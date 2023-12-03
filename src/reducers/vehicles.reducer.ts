import { vehiclesConstants } from '@/constants';

let initialState = {
  brands: [],
  models: [],
  years: [],
  vehicleDetails: {},
  typeVehicle: 'cars',
  filters: {
    brand: {
      name: '',
      code: '',
    },
    model: {
      name: '',
      code: '',
    },
    year: {
      name: '',
      code: '',
    },
  },
  loading: false,
  loadingDetails: false
}

export function vehicles(state = initialState, action: any) {
  switch (action.type) {
    case vehiclesConstants.CHANGE_VEHICLE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }

    case vehiclesConstants.CHANGE_FIELD:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.field]: {
            code: action.payload.code,
            name: action.payload.name
          },
        }
      }

    case vehiclesConstants.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: {
            name: '',
            code: '',
          },
          model: {
            name: '',
            code: '',
          },
          year: {
            name: '',
            code: '',
          },
        }
      }

    case vehiclesConstants.GET_ALL_BRANDS_REQUEST:
    case vehiclesConstants.GET_ALL_MODELS_REQUEST:
    case vehiclesConstants.GET_ALL_YEARS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case vehiclesConstants.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_MODELS_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_YEARS_SUCCESS:
      return {
        ...state,
        years: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_BRANDS_FAILURE:
    case vehiclesConstants.GET_ALL_MODELS_FAILURE:
    case vehiclesConstants.GET_ALL_YEARS_FAILURE:
      return {
        ...state,
        loading: false
      }

    case vehiclesConstants.GET_VEHICLE_DETAILS_REQUEST:
      return {
        ...state,
        loadingDetails: true
      }

    case vehiclesConstants.GET_VEHICLE_DETAILS_SUCCESS:
      return {
        ...state,
        vehicleDetails: action.payload,
        loadingDetails: false
      }

    case vehiclesConstants.GET_VEHICLE_DETAILS_FAILURE:
      return {
        ...state,
        loadingDetails: false
      }

    default:
      return state;
  }
}

import { vehiclesConstants } from '@/constants';
import { vehiclesServices } from '@/services';

export const vehiclesActions = {
  changeVehicle,
  changeField,
  clearFilters,
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails
};

function changeVehicle(name: string, value: string) {
  return (dispatch: any) => {
    dispatch({
      type: vehiclesConstants.CHANGE_VEHICLE,
      payload: { name, value }
    });
    dispatch(clearFilters());
  }
}

function changeField(field: string, code: string, name: string) {
  return (dispatch: any) => {
    dispatch({
      type: vehiclesConstants.CHANGE_FIELD,
      payload: { field, code, name }
    });
  }
}

function clearFilters() {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.CLEAR_FILTERS });
  }
}

function getAllBrands(vehicle: string) {
  return async (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_BRANDS_REQUEST });

    try {
      const data = await vehiclesServices.getAllBrands(vehicle);
      dispatch({
        type: vehiclesConstants.GET_ALL_BRANDS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: vehiclesConstants.GET_ALL_BRANDS_FAILURE, error });
    }
  }
}

function getAllModels(vehicle: string, brand: string) {
  return async (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_MODELS_REQUEST });

    try {
      const data = await vehiclesServices.getAllModels(vehicle, brand);
      dispatch({
        type: vehiclesConstants.GET_ALL_MODELS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: vehiclesConstants.GET_ALL_MODELS_FAILURE, error });
    }
  }
}

function getAllYears(vehicle: string, brand: string, model: string) {
  return async (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_YEARS_REQUEST });

    try {
      const data = await vehiclesServices.getAllYears(vehicle, brand, model);
      dispatch({
        type: vehiclesConstants.GET_ALL_YEARS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: vehiclesConstants.GET_ALL_YEARS_FAILURE, error });
    }
  }
}

function getVehicleDetails(vehicle: string, brand: string, model: string, year: string) {
  return async (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_VEHICLE_DETAILS_REQUEST });
    
    try {
      const data = await vehiclesServices.getVehicleDetails(vehicle, brand, model, year);
      dispatch({
        type: vehiclesConstants.GET_VEHICLE_DETAILS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: vehiclesConstants.GET_VEHICLE_DETAILS_FAILURE, error });
    }
  }
}
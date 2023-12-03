import { useEffect } from 'react';
import { vehiclesActions } from '@/actions';
import { useAppDispatch, useAppSelector } from '@/helpers';

export function useResult() {
  const dispatch = useAppDispatch();
  const {
    vehicleDetails,
    filters: { brand, model, year },
    typeVehicle,
    loadingDetails,
  } = useAppSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getVehicleDetails(typeVehicle, brand.code, model.code, year.code));
    return () => { dispatch(vehiclesActions.clearFilters()); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    vehicleDetails,
    loadingDetails
  };
}
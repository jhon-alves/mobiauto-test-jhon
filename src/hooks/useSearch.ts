import { useEffect } from 'react';
import { vehiclesActions } from '@/actions';
import { useAppDispatch, useAppSelector } from '@/helpers';

export function useSearch() {
  const dispatch = useAppDispatch();
  const { 
    brands,
    models,
    years,
    filters: { brand, model },
    typeVehicle,
    loading
  } = useAppSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getAllBrands(typeVehicle));
  }, [dispatch, typeVehicle]);

  useEffect(() => {
    if (brand.name.length > 0) {
      dispatch(vehiclesActions.getAllModels(typeVehicle, brand.code));
    }
  }, [dispatch, typeVehicle, brand]);

  useEffect(() => {
    if (model.name.length > 0) {
      dispatch(vehiclesActions.getAllYears(typeVehicle, brand.code, model.code));
    }
  }, [dispatch, typeVehicle, brand, model]);

  return {
    brands,
    models,
    years,
    loading
  };
}
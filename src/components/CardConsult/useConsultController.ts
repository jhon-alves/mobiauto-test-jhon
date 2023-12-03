import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { vehiclesActions } from '@/actions';
import { useAppDispatch, useAppSelector } from '@/helpers';

interface BodyProps {
  code: string;
  name: string;
};

export function useConsultController() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filters, typeVehicle } = useAppSelector(state => state.vehicles);
  const [brandTouched, setBrandTouched] = useState(false);
  const [modelTouched, setModelTouched] = useState(false);
  const [yearTouched, setYearTouched] = useState(false);
  const brandError = brandTouched && (!filters.brand.code || !filters.brand.name);
  const modelError = modelTouched && (!filters.model.code || !filters.model.name);
  const yearError = yearTouched && (!filters.year.code || !filters.year.name);

  function handleVehicleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name && value) {
      dispatch(vehiclesActions.changeVehicle(name, value));
    }
    setBrandTouched(false);
    setModelTouched(false);
    setYearTouched(false);
  }

  function handleBrandFieldChange(items: BodyProps) {
    const { code, name } = items;

    if (code && name) {
      dispatch(vehiclesActions.changeField('brand', code, name ));
    }
  }

  function handleModelFieldChange(items: BodyProps) {
    const { code, name } = items;

    if (code && name) {
      dispatch(vehiclesActions.changeField('model', code, name ));
    }
  }

  function handleYearFieldChange(items: BodyProps) {
    const { code, name } = items;

    if (code && name) {
      dispatch(vehiclesActions.changeField('year', code, name ));
    }
  }
  
  return {
    router,
    filters,
    typeVehicle,
    brandError,
    modelError,
    yearError,
    setBrandTouched,
    setModelTouched,
    setYearTouched,
    handleVehicleFieldChange,
    handleBrandFieldChange,
    handleModelFieldChange,
    handleYearFieldChange
  };
}
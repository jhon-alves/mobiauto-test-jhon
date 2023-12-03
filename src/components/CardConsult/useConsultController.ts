import { ChangeEvent } from 'react';
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

  function handleVehicleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch(vehiclesActions.changeVehicle(name, value));
  }

  function handleBrandFieldChange(items: BodyProps) {
    const { code, name } = items;
    dispatch(vehiclesActions.changeField('brand', code, name ));
  }

  function handleModelFieldChange(items: BodyProps) {
    const { code, name } = items;
    dispatch(vehiclesActions.changeField('model', code, name ));
  }

  function handleYearFieldChange(items: BodyProps) {
    const { code, name } = items;
    dispatch(vehiclesActions.changeField('year', code, name ));
  }
  
  return {
    router,
    filters,
    typeVehicle,
    handleVehicleFieldChange,
    handleBrandFieldChange,
    handleModelFieldChange,
    handleYearFieldChange
  };
}
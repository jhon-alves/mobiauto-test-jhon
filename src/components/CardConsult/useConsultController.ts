import { useRouter } from 'next/navigation';
import { vehiclesActions } from '@/actions';
import { useAppDispatch, useAppSelector } from '@/helpers';

export function useConsultController() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    filters,
    typeVehicle
  } = useAppSelector(state => state.vehicles);

  function handleVehicleFieldChange(e: any) {
    const { name, value } = e.target;
    dispatch(vehiclesActions.changeVehicle(name, value));
  }

  function handleBrandFieldChange(details: any) {
    const { code, name } = details.option;
    dispatch(vehiclesActions.changeField('brand', code, name ));
  }

  function handleModelFieldChange(details: any) {
    const { code, name } = details.option;
    dispatch(vehiclesActions.changeField('model', code, name ));
  }

  function handleYearFieldChange(details: any) {
    const { code, name } = details.option;
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
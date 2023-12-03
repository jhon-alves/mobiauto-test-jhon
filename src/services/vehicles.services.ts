import { fetchApi } from '@/helpers';

export const vehiclesServices = {
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails,
};

async function getAllBrands(vehicleType: string) {
  try {
    return await fetchApi(`/${vehicleType}/brands`);
  } catch (error) {
    console.error('Ocorreu um erro ao buscar as marcas', error);
  }
}

async function getAllModels(vehicleType: string, brandId: string) {
  try {
    return await fetchApi(`/${vehicleType}/brands/${brandId}/models`);
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os modelos', error);
  }
}

async function getAllYears(vehicleType: string, brandId: string, modelId: string) {
  try {
    return await fetchApi(`/${vehicleType}/brands/${brandId}/models/${modelId}/years`);
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os anos', error);
  }
}

async function getVehicleDetails(vehicleType: string, brandId: string, modelId: string, yearId: string) {
  try {
    return await fetchApi(`/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`);
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os detalhes', error);
  }
}
import { ModelResponse, DetailsResponse } from './types';

export const vehiclesServices = {
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails,
};

async function getAllBrands(vehicleType: string): Promise<ModelResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${vehicleType}/brands`);

  if (!res.ok) {
    throw new Error('Ocorreu um erro ao buscar as marcas');
  }

  return res.json();
}

async function getAllModels(vehicleType: string, brandId: string): Promise<ModelResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${vehicleType}/brands/${brandId}/models`);

  if (!res.ok) {
    throw new Error('Ocorreu um erro ao buscar os modelos');
  }

  return res.json();
}

async function getAllYears(vehicleType: string, brandId: string, modelId: string): Promise<ModelResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${vehicleType}/brands/${brandId}/models/${modelId}/years`);

  if (!res.ok) {
    throw new Error('Ocorreu um erro ao buscar os anos');
  }

  return res.json();
}

async function getVehicleDetails(vehicleType: string, brandId: string, modelId: string, yearId: string): Promise<DetailsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`);

  if (!res.ok) {
    throw new Error('Ocorreu um erro ao buscar os detalhes');
  }

  return res.json();
}
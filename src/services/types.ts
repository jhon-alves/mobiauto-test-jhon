export type ModelResponse = {
  code: string;
  name: string;
}[];

export type DetailsResponse = {
  bradn: string;
  codeFipe: string;
  fuel: string;
  fuelAcronym: string;
  model: string;
  modelYear: number;
  price: string;
  referenceMonth: string;
  vehicleType: string | number;
};
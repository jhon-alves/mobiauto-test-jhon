import {
  Box,
  Grid,
  Button,
  TextField,
  Autocomplete,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from '@mui/material';
import { Card } from '../styles';
import { useConsultController } from './useConsultController';

interface IFipeApi {
  code: string;
  name: string;
}

interface IConsult {
  brands: IFipeApi[];
  models: IFipeApi[];
  years: IFipeApi[];
}

export function CardConsult({ brands, models, years }: IConsult) {
  const {
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
  } = useConsultController();

  const isBtnDisabled = !(
    filters.brand.name.length > 0 
    && filters.model.name.length > 0 
    && filters.year.name.length > 0
  );

  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              row
              name="typeVehicle"
              value={typeVehicle}
              onChange={handleVehicleFieldChange}
            >
              <FormControlLabel
                value="cars"
                control={<Radio />}
                label="Carros"
              />
              <FormControlLabel
                value="motorcycles"
                control={<Radio />}
                label="Motos"
              />
              <FormControlLabel
                value="trucks"
                control={<Radio />}
                label="Caminhões"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            loadingText="Carregando..."
            noOptionsText="Sem opcões"
            clearText="Excluir"
            clearOnEscape={true}
            disableClearable={true}
            options={brands}
            getOptionLabel={(option) => option.name || ''}
            isOptionEqualToValue={(_option, value) => filters.brand.code === value.code}
            loading={brands?.length === 0}
            value={filters.brand}
            onChange={(_e, items, _options, _details) => handleBrandFieldChange(items)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Marca"
                variant="outlined"
                onBlur={() => setBrandTouched(true)}
                error={brandError}
                helperText={
                  brandError && (
                    <Typography variant="caption">O preenchimento do campo Marca é obrigatório!</Typography>
                  )
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            loadingText="Carregando..."
            noOptionsText="Sem opcões"
            clearText="Excluir"
            clearOnEscape={true}
            disableClearable={true}
            disabled={!filters.brand.code && !filters.brand.name}
            options={models}
            getOptionLabel={(option) => option.name || ''}
            isOptionEqualToValue={(_option, value) => filters.model.code === value.code}
            loading={models.length === 0}
            value={filters.model}
            onChange={(_e, items, _options, _details) => handleModelFieldChange(items)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Modelo"
                variant="outlined"
                onBlur={() => setModelTouched(true)}
                error={modelError}
                helperText={
                  modelError && (
                    <Typography variant="caption">O preenchimento do campo Modelo é obrigatório!</Typography>
                  )
                }
              />
            )}
          />
        </Grid>
        {filters.model.name.length > 0 && (
          <Grid item xs={12}>
            <Autocomplete
              loadingText="Carregando..."
              noOptionsText="Sem opcões"
              clearText="Excluir"
              clearOnEscape={true}
              disableClearable={true}
              options={years}
              getOptionLabel={(option) => option.name || ''}
              isOptionEqualToValue={(_option, value) => filters.year.code === value.code}
              loading={years.length === 0}
              value={filters.year}
              onChange={(_e, items, _options, _details) => handleYearFieldChange(items)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ano"
                  variant="outlined"
                  onBlur={() => setYearTouched(true)}
                  error={yearError}
                  helperText={
                    yearError && (
                      <Typography variant="caption">O preenchimento do campo Ano é obrigatório!</Typography>
                    )
                  }
                />
              )}
            />
          </Grid>
        )}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            disabled={isBtnDisabled}
            color="primary"
            variant="contained"
            onClick={() => router.push('/result')}
          >
            Consultar preço
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
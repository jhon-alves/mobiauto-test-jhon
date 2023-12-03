'use client'
import { useRouter } from 'next/navigation';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useResult } from '@/hooks';
import { useAppDispatch } from '@/helpers';
import { vehiclesActions } from '@/actions';
import { BoxContainer, Chip } from './styles';

export default function ResultPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { vehicleDetails, loadingDetails } = useResult();

  function goBack() {
    router.back();
    dispatch(vehiclesActions.clearFilters());
  }

  return (
    <>
      <BoxContainer>
        {loadingDetails ? <CircularProgress /> : (
          <>
            <Typography variant="h2" align="center">
              Tabela Fipe: Preço {vehicleDetails?.brand} {vehicleDetails?.model}
            </Typography>
            <Chip label={vehicleDetails?.price} />
            <Typography variant="caption">
              Este é o preço de compra do veículo
            </Typography>
          </>
        )}
      </BoxContainer>

      <Box width="100%" display="flex" alignItems="center" justifyContent="center" paddingTop="2rem">
        <Button
          color="primary"
          variant="contained"
          onClick={goBack}
        >
          Voltar
        </Button>
      </Box>
    </>
  );
}
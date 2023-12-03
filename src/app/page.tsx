'use client'
import { Grid as MuiGrid, Typography, styled } from '@mui/material';
import { CardConsult } from '@/components';
import { useSearch } from '@/hooks';

const Grid = styled(MuiGrid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function SearchPage() {
  const { brands, models, years } = useSearch();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2">Tabela Fipe</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CardConsult brands={brands} models={models} years={years} />
      </Grid>
    </>
  );
}

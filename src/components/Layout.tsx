import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Container } from './styles';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Container>
  );
}

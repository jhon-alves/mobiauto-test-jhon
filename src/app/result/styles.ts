'use client'
import {
  styled,
  Box as MuiBox,
  Chip as MuiChip,
} from '@mui/material';

export const BoxContainer = styled(MuiBox)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4),
  background: theme.palette.success.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 20
}));

export const Chip = styled(MuiChip)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.success.main,
  color: theme.palette.common.white,
  fontSize: 20
}));
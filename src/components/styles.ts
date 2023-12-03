'use client';
import { 
  styled,
  Card as MuiCard,
  Skeleton as MuiSkeleton,
  Container as MuiContainer,
} from '@mui/material';

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 0, 0)
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  width: 600,
  padding: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    padding: theme.spacing(2),
  }
}));

export const Skeleton = styled(MuiSkeleton)(({ theme }) => ({
  background: theme.palette.grey[50],
}));
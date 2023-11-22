import * as React from 'react';
import { Box, Grid, Paper, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';

const defaultTheme = createTheme();

interface DashboardProps {
  email?: string; // Definindo 'email' como uma propriedade opcional
}

const Dashboard: NextPage<DashboardProps> = ({ email = '' }) => {
  const formattedEmail = email
    ? email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
    : 'Usuário';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Seja bem-vindo, @{formattedEmail}!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Painel de Controle
        </Typography>
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6">Caixa {index + 1}</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

// 'getInitialProps' para recuperar o e-mail da query
Dashboard.getInitialProps = async (context) => {
  const { query } = context;
  return { email: query.email || '' };
};

export default Dashboard;

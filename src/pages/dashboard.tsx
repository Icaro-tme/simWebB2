import * as React from 'react';
import { AppBar, Box, Grid, Paper, Toolbar, Typography, CssBaseline, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';

const defaultTheme = createTheme();

interface DashboardProps {
  email?: string;
}

const Dashboard: NextPage<DashboardProps> = ({ email = '' }) => {
  const formattedEmail = email
    ? email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
    : 'Usuário';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static" sx={{ marginBottom: 2, backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)', minHeight: 200, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          <Typography variant="h4" color="inherit" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Painel de Controle
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
          Seja bem-vindo, @{formattedEmail}!
        </Typography>
        <Divider sx={{ marginY: 4 }} />
        <Grid container spacing={3} justifyContent="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="h6">Caixa {index + 1}</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box component="footer" sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {'Direitos Autorais © '}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ color: 'inherit' }}>
              Não clique aqui, sob hipótese alguma! ( ͡° ͜ʖ ͡°)
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Dashboard.getInitialProps = async (context) => {
  const { query } = context;
  const email = typeof query.email === 'string' ? query.email : '';
  return { email };
};

export default Dashboard;

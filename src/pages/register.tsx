import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'; // Importando o Link do Next.js
import { useRouter } from 'next/router';

const defaultTheme = createTheme();

const Register: React.FC = () => {
  const [accountCreated, setAccountCreated] = React.useState(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    });

    // Simular criação de conta
    setAccountCreated(true);
    setTimeout(() => {
      router.push('/login');
    }, 3000); // Redirecionar para a página de login após 3 segundos
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Criar Conta
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar Conta
              </Button>
              {accountCreated && (
                <Typography color="green">
                  Conta criada com sucesso!
                </Typography>
              )}
            </Box>
            <Link href="/login" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', mt: 2 }}>
                Já tem uma conta? Faça login
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;

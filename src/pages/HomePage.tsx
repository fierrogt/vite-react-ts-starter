import { Button, Container, Typography, Stack, AppBar, Toolbar } from '@mui/material';

interface HomePageProps {
  onSelectDevices: () => void;
  onSpecSearch: () => void;
}

export default function HomePage({ onSelectDevices, onSpecSearch }: HomePageProps) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CordCompass
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4">Find the perfect USB cable</Typography>
          <Button variant="contained" onClick={onSelectDevices}>
            Select Devices
          </Button>
          <Button variant="outlined" onClick={onSpecSearch}>
            Search by Cable Specs
          </Button>
        </Stack>
      </Container>
    </>
  );
}

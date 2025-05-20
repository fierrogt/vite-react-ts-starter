import { useState } from 'react';
import {
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
} from '@mui/material';

interface DeviceSelectionPageProps {
  onSubmit: (devices: string[]) => void;
}

export default function DeviceSelectionPage({ onSubmit }: DeviceSelectionPageProps) {
  const [devices, setDevices] = useState<string[]>([]);

  const handleChange = (device: string) => {
    setDevices((prev) =>
      prev.includes(device) ? prev.filter((d) => d !== device) : [...prev, device]
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Select your devices</Typography>
        <FormGroup>
          {['Phone', 'Laptop', 'Tablet'].map((device) => (
            <FormControlLabel
              key={device}
              control={
                <Checkbox
                  checked={devices.includes(device)}
                  onChange={() => handleChange(device)}
                />
              }
              label={device}
            />
          ))}
        </FormGroup>
        <Button variant="contained" onClick={() => onSubmit(devices)}>
          Find Cables
        </Button>
      </Stack>
    </Container>
  );
}

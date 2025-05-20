import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
} from '@mui/material';

interface Specs {
  protocol: string;
  length: string;
}

interface SpecsSearchPageProps {
  onSubmit: (specs: Specs) => void;
}

export default function SpecsSearchPage({ onSubmit }: SpecsSearchPageProps) {
  const [specs, setSpecs] = useState<Specs>({ protocol: '', length: '' });

  const handleChange = (field: keyof Specs) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSpecs((prev) => ({ ...prev, [field]: event.target.value }));
    };

  return (
    <Container sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Filter by specs</Typography>
        <TextField
          select
          label="Protocol"
          value={specs.protocol}
          onChange={handleChange('protocol')}
        >
          {['USB 2.0', 'USB 3.0', 'USB 3.2', 'Thunderbolt'].map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Length (m)"
          value={specs.length}
          onChange={handleChange('length')}
        />
        <Button variant="contained" onClick={() => onSubmit(specs)}>
          Find Cables
        </Button>
      </Stack>
    </Container>
  );
}

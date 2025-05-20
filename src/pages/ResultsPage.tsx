import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
} from '@mui/material';

interface ResultsPageProps {
  devices: string[];
  specs?: { protocol: string; length: string };
  onBack: () => void;
}

const sampleCables = [
  { id: 1, name: 'Cable A', price: '$10' },
  { id: 2, name: 'Cable B', price: '$12' },
];

export default function ResultsPage({ devices, specs, onBack }: ResultsPageProps) {
  return (
    <Container sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Results</Typography>
        {devices.length > 0 && (
          <Typography>For devices: {devices.join(', ')}</Typography>
        )}
        {specs && (
          <Typography>
            Specs: {specs.protocol} {specs.length && `- ${specs.length}m`}
          </Typography>
        )}
        {sampleCables.map((cable) => (
          <Card key={cable.id} variant="outlined">
            <CardContent>
              <Typography variant="h6">{cable.name}</Typography>
              <Typography>{cable.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
        ))}
        <Button onClick={onBack}>Back to Home</Button>
      </Stack>
    </Container>
  );
}

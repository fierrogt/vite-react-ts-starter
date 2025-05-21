import { makeServer } from './server';

export const startMockServer = () => makeServer({ environment: 'development' });

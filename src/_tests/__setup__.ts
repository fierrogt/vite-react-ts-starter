import { beforeEach, afterEach } from 'vitest';

import '@/_mocks/fetchPolyfill';
import { makeServer } from '@/_mocks/server';

export let server: ReturnType<typeof makeServer>;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
});

afterEach(() => {
  server.shutdown();
});

import { beforeEach, afterEach } from 'vitest';
import { makeServer } from '@/_mocks/server';
import type { Server } from 'miragejs';

import '@/_mocks/fetchPolyfill';

let server: Server;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
});

afterEach(() => {
  server.shutdown();
});

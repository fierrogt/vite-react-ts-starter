import { createServer } from 'miragejs';
import { createEntityAdapter } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  start_date: string;
  completed_date: string;
  assignees: number[];
};

export function makeServer({ environment = 'development' } = {}) {
  const adapter = createEntityAdapter<Project>();
  let state = adapter.getInitialState();

  function populateInitialData() {
    state = adapter.setAll(state, [
      { id: 1, start_date: '2021-04-01', completed_date: '2021-04-05', assignees: [4] },
    ]);
  }

  populateInitialData();

  return createServer({
    environment,
    routes() {
      this.namespace = '/api';

      this.get('/projects', () => {
        return Object.values(state.entities);
      });
    },
  });
}

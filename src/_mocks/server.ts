import { createServer } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api';

      this.get('/projects', () => {
        return [
          {
            id: 1,
            start_date: '2021-04-01',
            completed_date: '2021-04-05',
            assignees: [4],
          },
        ];
      });
    },
  });
}

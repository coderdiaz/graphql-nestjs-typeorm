import { createServer } from 'http';
import { main } from '../../settings';
import { SUBSCRIPTION_SERVER } from './subscription.constants';

export const createSubscriptionProviders = (port: number = main.subscriptionsPort) => [
  {
    provide: SUBSCRIPTION_SERVER,
    useFactory: () => {
      const server = createServer();
      return new Promise(resolve => server.listen(port, () => resolve(server)));
    },
  },
];

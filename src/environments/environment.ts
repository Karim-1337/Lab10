import type { AppEnvironment } from './environment.model';

/** Default when running `ng serve` (development configuration). */
export const environment: AppEnvironment = {
  name: 'LOCAL',
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

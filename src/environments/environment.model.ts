export type AppEnvironmentName = 'LOCAL' | 'TEST' | 'UAT' | 'PROD';

export interface AppEnvironment {
  name: AppEnvironmentName;
  production: boolean;
  apiUrl: string;
}

import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { WalletRecordSchema } from './src/infrastructure/persistence/wallet-record';

export default defineConfig({
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: Number(process.env.DB_PORT ?? '5432'),
  dbName: process.env.DB_NAME ?? 'transactional_wallet',
  user: process.env.DB_USER ?? 'transactional_wallet',
  password: process.env.DB_PASSWORD ?? 'transactional_wallet_dev_password',
  entities: [WalletRecordSchema],
  extensions: [Migrator],
  migrations: { 
    path: './dist/migrations', 
    pathTs: './src/migrations',
    transactional: true,
 },
});

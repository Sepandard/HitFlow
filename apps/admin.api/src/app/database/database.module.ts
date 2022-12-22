import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { poolConfig } from '../../environments/postgres.env';
import { PostgresService } from './services/postgres.service';

const databasePoolFactory = async () => new Pool(poolConfig);

@Module({
  providers: [
    {
      provide: 'DATABASE_POOL',
      useFactory: databasePoolFactory,
    },
    PostgresService,
  ],
  exports: [PostgresService],
})
export class DatabaseModule {}

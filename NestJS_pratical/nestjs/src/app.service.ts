import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection() // Inject the default Sequelize connection
    private sequelize: Sequelize,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async checkDbConnection(): Promise<{ status: string; message?: string }> {
    try {
      await this.sequelize.authenticate();
      return { status: 'ok', message: 'Database connection successful.' };
    } catch (error) {
      console.error('Database connection check failed:', error);
      return { status: 'error', message: 'Database connection failed.' };
    }
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { UserModule } from './modules/users/user.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): SequelizeModuleOptions => ({
        dialect: configService.get<string>('DB_DIALECT') as 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', '123'),
        database: configService.get<string>('DB_NAME', 'Nestjs'),
        autoLoadModels: true,
        synchronize: configService.get<string>('NODE_ENV') !== 'production',
        logging: console.log,
      }),
      inject: [ConfigService],
    }),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entities/user.entity";
import { SeedUser } from "./seeders/database.seed";
import { SeederModule } from "nestjs-sequelize-seeder";
@Module({
    imports: [
        SequelizeModule.forFeature([User]),    
        SeederModule.forFeature([SeedUser]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})

export class UserModule {}
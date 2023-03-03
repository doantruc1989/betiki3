import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { HomepageModule } from './homepage/homepage.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQL_HOST: "localhost",
        MYSQL_PORT: 3306,
        MYSQL_USER: "root",
        MYSQL_DB: "db5",
        JWT_ACCESS_TOKEN_SECRET: "mycat",
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: "1d",
        JWT_REFRESH_TOKEN_SECRET: "mycat2",
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: "7d",
      }),
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ProductModule,
    HomepageModule,
    CartModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

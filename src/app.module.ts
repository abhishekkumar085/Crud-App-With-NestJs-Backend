import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config/serverConfig';
import { User } from './user/entities/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:DB_HOST,
      port:DB_PORT,
      password:DB_PASSWORD,
      username:DB_USERNAME,
      entities:[User],
      database:DB_NAME,
      synchronize:true,
      logging:true,
    }),
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'postgres',
      database: 'payment-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PaymentsModule],
  controllers: [AppController, PaymentsController],
  providers: [AppService],
})
export class AppModule {}

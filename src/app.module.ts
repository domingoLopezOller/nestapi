import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products/products.controller';
import { AlumnosController } from './products/alumnos/alumnos.controller';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,})],
  controllers: [ProductsController, AlumnosController],
  providers: [],
})
export class AppModule {}

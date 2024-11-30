import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/serverConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT ?? 3000);
}
bootstrap();

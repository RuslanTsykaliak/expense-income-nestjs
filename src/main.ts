import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create an instance of the AppModule
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip away properties that aren't decorated as inputs
      transform: true, // Automatically transform incoming data to match DTOs
      transformOptions: {
        enableImplicitConversion: true, // Enable automatic data type conversion
      },
    }),
  );
  await app.listen(3000); // Start the application, listening on port 3000
}
bootstrap(); // Call the bootstrap function to start the application

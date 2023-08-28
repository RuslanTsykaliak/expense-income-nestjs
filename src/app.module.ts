import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [SummaryModule, ReportModule], // Import and include SummaryModule and ReportModule
  controllers: [AppController], // Register the AppController
  providers: [
    AppService, // Register the AppService
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor, // Register the ClassSerializerInterceptor as an interceptor
    },
  ],
})
export class AppModule {}

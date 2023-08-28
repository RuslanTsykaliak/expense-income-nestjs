import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    return handler.handle().pipe(
      map((data) => {
        // Create a new response object based on the original data
        const response = {
          ...data,
          createdAt: data.created_at, // Rename 'created_at' property to 'createdAt'
        };

        // Remove properties from the response object
        delete response.updated_at; // Remove 'updated_at' property
        delete response.created_at; // Remove 'created_at' property

        return response; // Return the modified response object
      }),
    );
  }
}

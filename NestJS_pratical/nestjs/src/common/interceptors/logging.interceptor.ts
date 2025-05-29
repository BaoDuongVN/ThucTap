import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Request starting....');
    const start = Date.now();
    return next.handle().pipe(
      tap((data) => {
        console.log(`The request completed in ${Date.now() - start}ms`);
      }),
    );
  }
}

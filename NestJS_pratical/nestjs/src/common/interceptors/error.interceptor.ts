import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorInterceptor.name);
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const controllerName = context.getClass().name;
    const handlerName = context.getHandler().name;
    this.logger.log(`[${controllerName}#${handlerName}] - Entering handler...`);
    return next.handle().pipe(
      catchError((err) => {
        this.logger.error(
          `Class name: ${controllerName} && Handler name: ${handlerName} - ${err}`,
          err.stack,
        );
        return throwError(() => err);
      }),
    );
  }
}

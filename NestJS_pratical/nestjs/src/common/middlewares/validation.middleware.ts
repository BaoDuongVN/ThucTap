import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  Type,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { API_RESPONSE } from '../base/api_response.base';

export function ValidationMiddlewareFactory(dtoClass: Type<any>) {
  @Injectable()
  class ValidationMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const dtoInstance = plainToInstance(dtoClass, req.body);
      const errors: ValidationError[] = await validate(dtoInstance);
      const formattedErrors = {};
      if (errors.length > 0) {
        errors.forEach((error) => {
          formattedErrors[error.property] = Object.values(
            error.constraints || {},
          ).join(', ');
        });
        const response = API_RESPONSE.error(
          formattedErrors,
          'Validation failed',
        );
        throw new BadRequestException(response);
      }
      req.body = dtoInstance;
      next();
    }
  }
  return ValidationMiddleware;
}

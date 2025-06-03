import { HttpStatus } from '@nestjs/common';
import { ApiResponseKey } from 'src/enum/api_response.enum';

export class API_RESPONSE {
  static timestamps(): unknown {
    return Date.now();
  }

  static success<T>(data?: T, message?: string): unknown {
    const code = HttpStatus.OK;
    return {
      [ApiResponseKey.STATUS]: true,
      [ApiResponseKey.CODE]: code,
      [ApiResponseKey.MESSAGE]: message,
      [ApiResponseKey.DATA]: data,
      [ApiResponseKey.TIMESTAMPS]: this.timestamps(),
    };
  }

  static error<T>(data?: T, message?: string): unknown {
    const code = HttpStatus.BAD_REQUEST;
    return {
      [ApiResponseKey.STATUS]: false,
      [ApiResponseKey.CODE]: code,
      [ApiResponseKey.MESSAGE]: message,
      [ApiResponseKey.DATA]: data,
      [ApiResponseKey.TIMESTAMPS]: this.timestamps(),
    };
  }

  static message(message: string): unknown {
    const code = HttpStatus.BAD_REQUEST;
    return {
      [ApiResponseKey.STATUS]: false,
      [ApiResponseKey.CODE]: code,
      [ApiResponseKey.MESSAGE]: message,
      [ApiResponseKey.TIMESTAMPS]: this.timestamps(),
    };
  }
}

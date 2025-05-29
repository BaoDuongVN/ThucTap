import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('User-Agent') || 'Unknown';
    const requestId = Math.random().toString(36).substring(7);

    this.logger.log(
      `[${requestId}] \x1b[36mBefore Request:\x1b[0m ${method} ${originalUrl} - IP: ${ip} - User Agent: ${userAgent}`,
    );

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = req.get('content-length') || '0';
      const responseTime = Date.now() - startTime;
      const statusColor =
        statusCode >= 500
          ? '\x1b[31m' // Màu đỏ cho lỗi server (500-599)
          : statusCode >= 400
            ? '\x1b[33m' // Màu vàng cho lỗi client (400-499)
            : statusCode >= 300
              ? '\x1b[36m' // Màu lục lam cho chuyển hướng (300-399)
              : statusCode >= 200
                ? '\x1b[32m' // Màu xanh lá cho thành công (200-299)
                : '\x1b[37m'; // Màu trắng cho các mã khác

      this.logger.log(
        `[${requestId}] \x1b[35mAfter Request:\x1b[0m ${method} ${originalUrl} ${statusColor}${statusCode}\x1b[0m ${contentLength} - IP: ${ip} - User Agent: ${userAgent} - Time: ${responseTime}ms`,
      );
    });

    next();
  }
}

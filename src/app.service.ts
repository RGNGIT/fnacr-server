import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCheck(): string {
    return 'If you see this, then server is operational!';
  }
}

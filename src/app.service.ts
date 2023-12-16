import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiStatus(): any {
    return {
      status: 'Running',
      timestamp: new Date()
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      success:true,
      message:'pong, that means ur server is running successfully!!'
    };
  }
}

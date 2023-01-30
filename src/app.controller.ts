import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SendRequestService } from './send-request/send-request.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly sendRequestService: SendRequestService
  ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/send-request")
  sendRequest(): string {
    this.sendRequestService.sendRequest();
    return 'request send';
  }
}

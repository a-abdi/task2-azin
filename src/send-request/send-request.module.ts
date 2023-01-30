import { DynamicModule, Module } from "@nestjs/common";
import { SendRequestService } from "./send-request.service";
import { HttpModule } from "@nestjs/axios";

@Module({})
export class SendRequestModule {
    static forRoot(endPoint: object): DynamicModule {
        return{
            module: SendRequestModule,
            providers: [
              {
                provide: 'SEND_REQUEST_ENDPOINT',
                useValue: endPoint
              }, 
              SendRequestService
            ],
            exports: [SendRequestService],
            imports: [HttpModule]
        }
    }
}
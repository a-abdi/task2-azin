import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class SendRequestService {
    private readonly url: string;
    constructor(
        @Inject('SEND_REQUEST_ENDPOINT') private endpoint,
        private readonly httpService: HttpService
        ) {
        this.url = this.endpoint.url;
    }

    sendRequest() {
        const response = this.httpService.get(this.url);
        console.log(response, `this response form ${this.url}`);
    }
}
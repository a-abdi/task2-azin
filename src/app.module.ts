import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendRequestModule } from './send-request/send-request.module';

@Module({
  imports: [SendRequestModule.forRoot({url: 'https://jsonplaceholder.typicode.com/posts/1'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

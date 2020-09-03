import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FooDTO } from './foo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: FooDTO): FooDTO {
    return body;
  }
}

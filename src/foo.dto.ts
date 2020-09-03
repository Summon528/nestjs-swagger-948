import { ApiProperty } from '@nestjs/swagger';

export class FooDTO {
  @ApiProperty()
  foo: number;
}

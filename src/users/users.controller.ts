import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //GET /users or /users?role=value
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }
  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() //Post /users
  create(@Body() user: NonNullable<unknown>) {
    return user;
  }
  @Patch(':id') //PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: NonNullable<unknown>) {
    return { id, ...userUpdate };
  }
  //DELETE /users/:id
  @Delete(':id') //GET /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}

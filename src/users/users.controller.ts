import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ description: 'User found.', type: User })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}

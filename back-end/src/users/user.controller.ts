import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  getUserByUsername(@Param() param) {
    return this.userService.getUserByUsername(param.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }
}

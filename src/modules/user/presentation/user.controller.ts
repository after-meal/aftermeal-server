import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterRequestDto } from '../dto/user-register-request.dto';
import { UserRegisterResponseDto } from '../dto/user-register-response.dto';
import { ResponseEntity } from '@common/model/response.entity';
import { MemberTypeValidationPipe } from '@common/pipe/member-type-validation.pipe';
import { UserService } from '../application/user.service';

@Controller('v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(
    @Body(MemberTypeValidationPipe) dto: UserRegisterRequestDto,
  ): Promise<ResponseEntity<UserRegisterResponseDto>> {
    return ResponseEntity.OK_WITH_DATA(
      '등록 성공',
      await this.userService.register(dto),
    );
  }
}

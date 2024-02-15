import { Body, Controller, Post } from '@nestjs/common';
import { ResponseEntity } from '@common/model/response.entity';
import { ParticipationService } from '../application/participation.service';
import { ParticipationRequestDto } from '../dto/participation-request.dto';
import { User } from '@common/decorator/user.decorator';

@Controller('v1/participation')
export class ParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @Post()
  async apply(
    @Body() dto: ParticipationRequestDto,
    @User('userId') userId: number,
  ): Promise<ResponseEntity<void>> {
    await this.participationService.apply(dto.activityId, userId);
    return ResponseEntity.OK_WITH('참가 신청 성공');
  }
}

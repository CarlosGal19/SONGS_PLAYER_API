import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { ILoginRequestDto } from './dto/request/login.interface';
import { responseConfig } from 'src/common/global/response.config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginRequest: ILoginRequestDto) {
    const loggedUser = await this.userRepository.findOne({
      where: {
        email: loginRequest.email,
        is_active: true,
      },
      select: {
        user_id: true,
        name: true,
        email: true,
        password: true,
        image_url: true,
      },
    });

    if (!loggedUser) {
      return new NotFoundException();
    }

    const passwordMatches = await bcrypt.compare(
      loginRequest.password,
      loggedUser.password,
    );

    if (!passwordMatches) {
      return new UnauthorizedException();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = loggedUser;

    const accessToken = await this.jwtService.signAsync({
      user: userWithoutPassword,
    });
    return responseConfig({ token: accessToken }, 'Logged in');
  }
}

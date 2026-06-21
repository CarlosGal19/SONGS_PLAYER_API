import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album, Artist, Genre, Playlist, Song } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Album, Artist, Genre, Song, Playlist])],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}

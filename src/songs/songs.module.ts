import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album, Artist, Genre, LikedSongs, Playlist, Song } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Album,
      Artist,
      Genre,
      LikedSongs,
      Playlist,
      Song,
    ]),
  ],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}

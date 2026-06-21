import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Song } from './song.entity';
import { Playlist } from './playlist.entity';

@Entity({
  name: 'playlist_songs',
  comment: 'PLAYLIST SONGS TABLE',
})
export class PlaylistSongs {
  @PrimaryGeneratedColumn('uuid')
  playlist_song_id!: string;

  @ManyToOne(() => Playlist, (playlist) => playlist.playlist_songs)
  playlist!: Playlist;

  @ManyToOne(() => Song, (song) => song.playlist_songs)
  song!: Song;

  @Column({
    default: true,
    type: 'boolean',
    nullable: false,
  })
  is_active: boolean = true;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  created_at!: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Artist } from './artist.entity';
import { Genre } from './genre.entity';
import { Album } from './album.entity';
import { LikedSongs } from './liked_songs.entity';
import { PlaylistSongs } from './playlist_songs.entity';

@Entity({
  name: 'song',
  comment: 'SONGS TABLE',
})
export class Song {
  @PrimaryGeneratedColumn('uuid')
  song_id!: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  name!: string;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  artist!: Artist;

  @ManyToOne(() => Album, (album) => album.songs, { nullable: true })
  album?: Album;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  image_url?: string;

  @Column({
    type: 'int4',
    nullable: false,
  })
  duration!: number;

  @ManyToOne(() => Genre, (genre) => genre.songs)
  genre!: Genre;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  released_at?: Date;

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

  @OneToMany(() => LikedSongs, (likedSong) => likedSong.song)
  liked_songs!: LikedSongs[];

  @OneToMany(() => PlaylistSongs, (playlistSongs) => playlistSongs.song)
  playlist_songs!: PlaylistSongs[];
}

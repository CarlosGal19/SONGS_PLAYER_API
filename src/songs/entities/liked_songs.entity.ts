import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Song } from './song.entity';

@Entity({
  name: 'liked_songs',
  comment: 'LIKED SONGS TABLE',
})
export class LikedSongs {
  @PrimaryGeneratedColumn('uuid')
  liked_song_id!: string;

  @ManyToOne(() => User, (user) => user.liked_songs)
  user!: User;

  @ManyToOne(() => Song, (song) => song.liked_songs)
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

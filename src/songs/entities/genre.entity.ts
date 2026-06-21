import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Song } from './song.entity';

@Entity({
  name: 'genre',
  comment: 'GENRES TABLE',
})
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  genre_id!: string;

  @Column({
    type: 'varchar',
    length: 24,
    nullable: false,
  })
  name!: string;

  @OneToMany(() => Song, (song) => song.genre)
  songs!: Song[];

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

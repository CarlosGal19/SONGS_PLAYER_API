import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from './album.entity';
import { Song } from './song.entity';

@Entity({
  name: 'artist',
  comment: 'ARTISTS TABLE',
})
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  artist_id!: string;

  @Column({
    type: 'varchar',
    length: 48,
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  image_url!: string;

  @OneToMany(() => Album, (album) => album.artist)
  albums!: Album[];

  @OneToMany(() => Song, (song) => song.artist)
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

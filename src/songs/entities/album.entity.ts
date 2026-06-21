import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Artist } from './artist.entity';
import { Song } from './song.entity';

@Entity({
  name: 'album',
  comment: 'ALBUMS TABLE',
})
export class Album {
  @PrimaryGeneratedColumn('uuid')
  album_id!: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  name!: string;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  artist!: Artist;

  @OneToMany(() => Song, (song) => song.album)
  songs!: Song[];

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  image_url!: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  released_at!: Date;

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

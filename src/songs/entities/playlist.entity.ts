import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'playlist',
  comment: 'PALYLISTS TABLE',
})
export class Playlist {
  @PrimaryGeneratedColumn('uuid')
  playlist_id!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  image_url?: string;

  @ManyToOne(() => User, (user) => user.playlists)
  user!: User;

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

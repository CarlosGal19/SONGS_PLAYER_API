import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'user',
  comment: 'USERS TABLE',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 48,
    nullable: false,
  })
  email!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  password!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  image_url?: string;

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

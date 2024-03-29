import { Exclude, Expose } from 'class-transformer';
import { after } from 'node:test';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  @Exclude()
  password?: string;

  @Column({ nullable: true, default: 0 })
  status: boolean;

  @Column({ nullable: true })
  @Exclude()
  refresh_token?: string;

  @Column({ nullable: true })
  email_verified_at: Date;

  @Column({ nullable: true })
  verified_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({
    nullable: true,
  })
  auth_strategy: string;
}

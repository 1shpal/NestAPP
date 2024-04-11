
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique : true})
  username: string;

  @Column()
  password: string;
}

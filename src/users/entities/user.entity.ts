import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  SUPPLIER = 'supplier',
  RECIPIENT = 'recipient',
}

@Entity()
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'doe' })
  @Column()
  username: string;

  @ApiProperty({ example: '12345' })
  @Column()
  code: string;

  @ApiProperty({ example: 'supplier' })
  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.RECIPIENT,
  })
  type: UserType;

  constructor(
    id: number,
    username: string,
    code: string,
    type: UserType = UserType.RECIPIENT,
  ) {
    this.id = id;
    this.username = username;
    this.code = code;
    this.type = type;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'doe' })
  @Column()
  username: string;

  @ApiProperty({ example: '12345' })
  code: string;

  @ApiProperty({ example: 'supplier' })
  @Column()
  type: 'supplier' | 'recipient';

  constructor(
    id: number,
    username: string,
    code: string,
    type: 'supplier' | 'recipient',
  ) {
    this.id = id;
    this.username = username;
    this.code = code;
    this.type = type;
  }
}

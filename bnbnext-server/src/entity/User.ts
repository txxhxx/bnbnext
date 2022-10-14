import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column({ type: "text", nullable: true })
  password: string;

  @Column("simple-array", { nullable: true })
  provider: string[];

  @BeforeInsert()
  async setPassword(password: string) {
    if (!password) return;

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }

  async verifyPassword(password: string) {
    const result = await bcrypt.compare(password, this.password);
    return result;
  }
}

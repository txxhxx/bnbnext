import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/token";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
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

  async updatePassword(password: string) {
    if (!password) return;

    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async verifyPassword(password: string) {
    const result = await bcrypt.compare(password, this.password);
    return result;
  }

  async generateUserToken() {
    // refresh token is valid for 30days
    const refreshToken = await generateToken(
      {
        user_id: this.id,
      },
      {
        subject: "refresh_token",
        expiresIn: "30d",
      }
    );

    const accessToken = await generateToken(
      {
        user_id: this.id,
      },
      {
        subject: "access_token",
        expiresIn: "1h",
      }
    );

    return { refreshToken, accessToken };
  }
}

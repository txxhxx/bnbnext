import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "./entity/User";
import { Collection } from "./entity/Collection";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Collection],
  migrations: [],
  subscribers: [],
});

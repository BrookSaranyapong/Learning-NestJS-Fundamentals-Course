import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "postgres",
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    synchronize: false,
});

// import { DataSource, DataSourceOptions } from "typeorm";

// const config = {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: "postgres",
//     password: "pass123",
//     database: "postgres",
//     entities: ["dist/**/*.entity{.ts,.js}"],
//     migrations: ["dist/migrations/*{.ts,.js}"],
//     autoLoadEntities: true,
//     synchronize: true,
// }

// export const connectionSource = new DataSource(config as DataSourceOptions);
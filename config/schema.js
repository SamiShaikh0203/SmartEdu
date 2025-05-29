// import { boolean } from "drizzle-orm/gel-core";
// import { varchar } from "drizzle-orm/mysql-core";
import { pgTable,varchar,integer,boolean } from "drizzle-orm/pg-core";

export const USER_TABLE=pgTable('users',{
    id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
    Name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})
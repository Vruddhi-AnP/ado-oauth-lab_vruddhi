import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open (or create) the database
export const dbPromise = open({
  filename: "./tokens.db",
  driver: sqlite3.Database,
});

// Initialize DB schema
export async function initDb() {
  const db = await dbPromise;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      encrypted_token TEXT NOT NULL,
      iv TEXT NOT NULL,
      auth_tag TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

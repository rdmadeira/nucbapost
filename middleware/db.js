import { connectDB } from '../db/connection';

// Este middleware tiene la funcion de conectarse a la base de datos y ejecutar param. next, que es el próximo middleware:
export default async function database(req, res, next) {
  const { db, dbClient } = await connectDB();
  req.db = db;
  req.dbClient = dbClient;

  next();
}

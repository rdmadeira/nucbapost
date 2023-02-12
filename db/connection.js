// Next JS tiene el objeto padre global que se llama Global, similar al objeto window del navegador o DOM
import { MongoClient } from 'mongodb';

global.mongo = global.mongo || {};

// Esta es la funcion conexion a la base de datos mongodb:
export const connectDB = async () => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000,
    });
    await global.mongo.client.connect();
    console.log('conectado a la DB');
  }
  const db = global.mongo?.client?.db('nucpost');
  return { db, dbClient: global.mongo.client };
};

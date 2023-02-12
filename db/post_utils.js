import { v4 as uuidv4 } from 'uuid';

export const createPost = async (db, post) => {
  return db.collection('posts').insertOne(
    {
      ...post,
      _id: uuidv4(),
      createdAt: new Date().toLocaleString(),
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res.ops);
        return res.ops[0];
      }
    }
  );
};

export const getPost = async (db, id) => {
  return db.collection('posts').find({ _id: id }).toArray();
};

export const getPosts = (db) => {
  return db.collection('posts').find().sort({ createdAt: -1 }).toArray();
};

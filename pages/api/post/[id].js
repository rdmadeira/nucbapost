import nc from 'next-connect';
import { getPost } from '../../../db/post_utils';
import database from '../../../middleware/db';

const handle = nc();
handle.use(database);

handle.get(async (req, res) => {
  const post = await getPost(req.db, req.query.id); // query es el objeto que contiene el param del path
  res.send({ data: post });
});

export default handle;

import nc from 'next-connect'; // librería de request para no usar el request,response de next
import { createPost, getPosts } from '../../../db/post_utils';
import database from '../../../middleware/db';

const handle = nc()
  .use(database) // use - se usa para definir todos los request

  // Función controlador (para este endpoint 'posts' corré esta función assíncrona):

  .get(async (req, res) => {
    // adentro va un middleware (función entremedio mientras no llegue el pedido request, puede ser conectar al db, funciones de autorizacion o autenticación, validaciones, errores):
    const posts = await getPosts(req.db);
    res.send({ data: posts });
  })
  .post(async (req, res) => {
    const post = await createPost(req.db, {
      title: req.body.title,
      desciption: req.body.description,
    });
    res.send({ data: post });
  });

export default handle;

import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { MulterError } from 'multer';
import cors from 'cors'

import apiRound from './routes/api';
import uploadRound from './routes/upload';


dotenv.config();

const server = express();
//padrão cors cors(origin:'*') libera tudo pra todos no caso de baixo só para url informado abaixo e no caso do methods ele vai libersa só alguns  methods: ['GET', 'POST'] nesse caso só get e post
//uma api publica só é fazer server.use(cors()) pois era liberar tudo para todos
server.use(cors())

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use('/api', apiRound)
server.use('/upload', uploadRound)


server.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Page Not Found' });
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400)//bad Request cliente

    if (err instanceof MulterError) {
        res.json({ error: err.code });
    } else {
        console.log(err);
        res.json({ error: 'Ocorreu algum erro inesperado' });
    }

}
server.use(errorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
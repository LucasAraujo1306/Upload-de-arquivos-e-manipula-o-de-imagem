import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
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

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from '../models/PhraseModel'

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const random = (req: Request, res: Response) => {
    const numberRandom: number = Math.floor(Math.random() * 100000);
    res.json({ numberRandom });
}

export const nome = (req: Request, res: Response) => {
    const nome: string = req.params.nome;
    res.json({ nome });
}

export const createPhrases = async (req: Request, res: Response) => {
    let { author, txt } = req.body

    const newPhrase = await Phrase.create({ author, txt });
    res.status(201).json({ id: newPhrase.id, author, txt })
}

export const listPhrases = async (req: Request, res: Response) => {
    const list = await Phrase.findAll();
    res.json({ list });
}

export const getPhrases = async (req: Request, res: Response) => {

    const listbyId = await Phrase.findByPk(parseInt(req.params.id))

    if (!listbyId) {
        return res.status(404).json({ error: 'Frases não encontrada' });
    }

    res.json({ frase: listbyId })
}

export const updatePhrase = async (req: Request, res: Response) => {
    const { author, txt } = req.body
    const updatePhrase = await Phrase.findByPk(parseInt(req.params.id))

    if (updatePhrase) {
        updatePhrase.author = author;
        updatePhrase.txt = txt;

        await updatePhrase.save()

        res.json(updatePhrase);
    } else {
        return res.status(404).json({ error: 'Frases não encontrada' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    await Phrase.destroy({ where: { id } })

    res.status(204).json()
}

export const randomPhrases = async (req: Request, res: Response) => {
    const phrases = await Phrase.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    })
    if (phrases) {
        res.json({ phrases })
    } else {
        res.status(404).json({ error: 'Não há frases cadastradas' });
    }

}
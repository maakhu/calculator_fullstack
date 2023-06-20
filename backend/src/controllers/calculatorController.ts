import { Request, Response } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { writeToFile, readFromFile } from '../utils/fileUtils';

export async function getMemory(req: Request, res: Response) {
    const memory = readFromFile();
    if (memory === null) {
        throw new NotFoundError('memory not found');
    }
    res.send(memory);
}

export async function postMemory(req: Request, res: Response) {
    const { memory } = req.body;
    console.log("bodyyyyy "+ req.body)
    if (typeof memory !== 'string') {
        throw new ParameterError('memory must be a string');
    }
    writeToFile(memory);
    res.sendStatus(status.NO_CONTENT);
}

export async function deleteMemory(req: Request, res: Response) {
    writeToFile('');
    res.sendStatus(status.NO_CONTENT);
}

export async function getAddition(req: Request, res: Response) {
    const { a, b } = req.query;
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new ParameterError('a and b must be strings');
    }
    const result = Number(a) + Number(b);
    res.send(result.toString());
}

export async function postAddition(req: Request, res: Response) {
    const { a, b } = req.body;
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new ParameterError('a and b must be strings');
    }
    const result = Number(a) + Number(b);
    res.send(result.toString());
}

import express from 'express';
import status from 'http-status';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import * as calculatorController from '../controllers/calculatorController';
import { HttpError, NotFoundError, ParameterError } from '../errors';

const apiRouter = express.Router();
apiRouter.use(express.json());

apiRouter.get('/memory', calculatorController.getMemory);
apiRouter.post('/memory', calculatorController.postMemory);
apiRouter.delete('/memory', calculatorController.deleteMemory);

apiRouter.use('*', (req, res, next) => {
    next(new NotFoundError('API endpoint not found'));
}
);
apiRouter.use(apiErrorHandler);

export default apiRouter;
import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('ok');
});

router.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send('ok');
});

export default router;

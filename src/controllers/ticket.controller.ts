import { Request, Response } from 'express';

class TkController {
  handleTicketField = (req: Request, res: Response) => {
    const { field } = req.body;

    console.log('Valor recibido en field:', field);

    res.status(200).json({ message: 'Campo recibido correctamente', field });
  };
}

export default new TkController();

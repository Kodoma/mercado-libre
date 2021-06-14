import { NextFunction, Request, Response } from 'express';
import { meliService } from '../services/meli.service';

class MeliController {
  public static getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await meliService.getItems(req.query.search as string);
      res.json(response);
    } catch (e) {
      next(e);
    }
  };

  public static getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await meliService.getItemById(req.params.id as string);
      res.json(response);
    } catch (e) {
      next(e);
    }
  };
}

export default MeliController;

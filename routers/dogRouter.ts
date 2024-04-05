import express from 'express';
import { DogService } from '../services/DogService';

export const dogRouter = (dogService: DogService) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const dogs = await dogService.ListDogs();
    
    res.send(dogs);
  });

  return router;
}
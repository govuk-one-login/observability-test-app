import express from 'express';
import { DogService } from '../services/DogService';

export const dogRouter = (dogService: DogService) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const dogs = await dogService.ListDogs();
    
    res.send(dogs);
  });

  router.get('/:dogId', async (req, res) => {
    const id = Number(req.params.dogId);
    const dog = await dogService.GetDog(id);

    res.send(dog);
  });

  router.post('/', async (req, res) => {
    const dog = await dogService.NewDog(req.body);

    res.redirect('/');
  });

  return router;
}
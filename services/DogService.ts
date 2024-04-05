import { DogRepository } from "../repositories/DogRepository";
import { Dog } from "../models/Dog";

export class DogService {
  readonly dogRepository: DogRepository;

  constructor(dogRepository: DogRepository) {
    this.dogRepository = dogRepository;
  }

  async ListDogs(): Promise<Dog[]> {
    return this.dogRepository.ListDogs();
  }
}
import { Dog } from "../models/Dog";

export interface DogRepository {
  ListDogs(): Promise<Dog[]>;
}
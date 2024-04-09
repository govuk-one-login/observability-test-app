import { Dog } from "../models/Dog";

export interface DogRepository {
  ListDogs(): Promise<Dog[]>;
  NewDog(dog: Dog): Promise<Dog>;
  GetDog(id: number): Promise<Dog>;
}
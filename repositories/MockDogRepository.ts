import { Dog } from "../models/Dog";
import { DogRepository } from "./DogRepository";

export class MockDogRepository implements DogRepository {
  dogs: Dog[] = [{
    id: 0,
    name: "Peggy",
    breed: "Corgi",
    age: 3
  }]

  async ListDogs(): Promise<Dog[]> {
    return this.dogs;
  }
  
}
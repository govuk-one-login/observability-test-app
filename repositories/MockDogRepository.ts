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

  async GetDog(id: number): Promise<Dog> {
    return this.dogs[id];
  }
  
  async NewDog(dog: Dog): Promise<Dog> {
    dog.id = this.dogs.length;
    this.dogs[dog.id] = dog;

    return dog;
  }
}
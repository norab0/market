import { Rayon } from "./rayon";

export class Market {
  //private data members
  private id: number;
  private name: string;
  private address: string;
  private city: string;
  private rayons: Rayon[];

  //constructeur
  constructor(id: number, name: string, address: string, city: string) {
    this.id = id;
    this.name = name;
    this.rayons = [];
    this.address = address;
    this.city = city;
  }
  //getter
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getAddress(): string {
    return this.address;
  }
  public getCity(): string {
    return this.city;
  }
  public getRayons(): Rayon[] {
    return this.rayons;
  }
  //setter
  public setName(newName: string): void {
    this.name = newName;
  }
  public setAddress(newAddress: string): void {
    this.address = newAddress;
  }
  public setCity(newCity: string): void {
    this.city = newCity;
  }
  public setRayon(newRayon: Rayon[]): void {
    this.rayons = newRayon;
  }

  //methods
  //methode qui donne combien d'éléments on a dans le tableau
  public count(): number {
    return this.rayons.length;
  }

  //methode qui ajoute un rayon dans le tableau
  public addRayon(rayon: Rayon): void {
    //si rayon existe deja, on ajoute pas
    let rayon_existant = false;
    try {
      for (let i = 0; i < this.count(); i++) {
        if (this.rayons[i].getName() === rayon.getName()) {
          rayon_existant = true;
        }
      }
      if (!rayon_existant) {
        this.rayons.push(rayon);
      } else {
        throw new Error("Erreur: Le rayon n'a pas été trouvé !");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  //methode qui supprime un rayon du tableau à partir de son nom
  public removeRayonByName(name: string): void {
    let nomtrouve = false;
    //savoir si name est dans l'array rayon
    try {
      if (this.count() != 0) {
        try {
          for (let i = 0; i < this.count(); i++) {
            //si name est dans l'array rayons alors on
            if (this.rayons[i].getName() === name) {
              //supprime la valeur name du array rayons
              this.rayons.splice(i, 1);
              nomtrouve = true;
            }
          }
          if (!nomtrouve) {
            throw new Error(
              "Erreur: Le rayon " + name + " n'a pas été trouvé !"
            );
          }
        } catch (e) {
          console.error(e.message);
        }
      } else {
        throw new Error("Erreur: Il n'y a aucun rayons dans le market !");
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

interface Tutor{
    userName:string,
    userSecondName:string,
    email:string,
    password:string,
    Age:number
    DogName:string,
    DogAge:number,
    CEP:string | undefined,
    Street:string | undefined,
    Neighborhood:string | undefined,
    HouseNumber:number | undefined,
    cash?:number
}


export interface UserInfo {
    id: string;
    email: string;
    password: string;
    name: string;
    secondname: string;
    age: number;
    dogname: string;
    dogage: number;
    cep?: string;
    street?: string;
    housenumber?: number;
    neighborhood?: string;
    cash?:number;
  }

export interface Categories {
  id:string,
  name: string,
  price:number
}

   

export default Tutor
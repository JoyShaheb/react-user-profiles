export interface IPerson {
  id: string;
  title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IFullPerson extends IPerson {
  gender: "male" | "female" | "other" | "";
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
}

import type { IContact } from "./interfaces";

export type AuthCredentials = {
  email: string;
  password: string;
}

export type UpdateClient = {
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  coverPhotoUrl?: string;
  contacts?: IContact;
}

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string
    email: string,
    password: string,
}

export type UserWithoutPassword = Omit<IUser, 'password'>
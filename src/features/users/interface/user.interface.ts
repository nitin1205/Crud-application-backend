import { ObjectId } from 'mongoose';

export interface IUserDocument {
    _id: ObjectId | string;
    name: string;
    email: string;
    mobile: number;
    createdAt: Date;
    roles?: string[]
}

export interface ICreateUserData {
    name: string;
    email: string;
    mobile: number;
    roles: string[]
}




import { Document } from 'mongoose';

declare global {
    namespace Express {
        interface Request {
            currentUser?: IAuthPayload;
        }
    }
}

export interface IAuthPayload {
    userId: string;
    name: string;
    email: string;
    mobile: number;
}

export interface IAuthDocument extends Document {
    name: string;
    email: string;
    mobile: number;
    createdAt: Date;
    password?: string;
    comparePassword(password : string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
}

export interface ISignupData {
    email: string;
    name: string;
    mobile: number;
    password: string;
}


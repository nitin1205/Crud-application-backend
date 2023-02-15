import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

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
    _id: string | ObjectId;
    name: string;
    email: string;
    mobile: number;
    createdAt: Date;
    password: string;
    comparePassword(password : string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
}

export interface ISignupData {
    _id: ObjectId;
    email: string;
    name: string;
    password: string;
}

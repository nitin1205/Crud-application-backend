import { ServerError } from '@global/helpers/error-handler';
import { userService } from '@service/db/user.service';
import { IUserDocument } from '@user/interface/user.interface';
import { Request, Response } from 'express';

export class GetAllUser {
    public async getAllUsers(_req: Request, res: Response): Promise<void> {
        const users: IUserDocument[] = await userService.getAllUsers();

        if (!users?.length) {
            throw new ServerError('No user found');
        }
        res.json(users);
    };
}

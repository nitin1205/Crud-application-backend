import { BadRequestError } from '@global/helpers/error-handler';
import { userService } from '@service/db/user.service';
import { Request, Response } from 'express';

export class DeleteUser {
    public async delete(req: Request, _res: Response) {
        const { userId } = req.body;
        
        if (!userId) {
            throw new BadRequestError('User ID Required' );
        }

        const user = userService.getUserByUserId(userId);

        if (!user) {
            throw new BadRequestError('User does not exists');
        }

        
    };
};

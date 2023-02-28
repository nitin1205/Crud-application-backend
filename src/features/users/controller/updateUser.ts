import { Request, Response } from 'express';
import { joiValidation } from '@root/shared/decorators/joi-validation.decorators';
import { userSchema } from '@user/schemes/user';
import { BadRequestError } from '@global/helpers/error-handler';
import { userService } from '@service/db/user.service';

export class UpdateUser {
    @joiValidation(userSchema)
    public async Update(req: Request, res: Response) {
        const { id, name, mobile, email, roles } = req.body;

        if (!id || !name || !mobile || email || !Array.isArray(roles) || !roles.length) {
            throw new BadRequestError('All fields are requird');
        };

        const user = await userService.getUserByUserId(id);

        if (!user) {
            throw new BadRequestError('User not found');
        };

        const duplicate = await userService.getUserByEmail(email);
        
        if(duplicate && duplicate?._id.toString() !== id) {
            throw new BadRequestError('Duplicate email');
        };

        userService.update(id, name, email, roles, mobile);
    };
};

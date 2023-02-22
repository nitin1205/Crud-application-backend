import { IAuthDocument } from '@auth/interface/auth.interface';
import { AuthModel } from '@auth/models/auth.schema';
import { Helpers } from '@global/helpers/helpers';

class AuthService {
    public async createAuthUser(data: IAuthDocument): Promise<void> {
        await AuthModel.create(data);
    };

    public async getUserByEmail(email: string): Promise<IAuthDocument> {
        const user: IAuthDocument = (await AuthModel.findOne({
            email: Helpers.lowerCase(email)
        }).exec()
        ) as IAuthDocument;
        return user;
    };
};

export const authService: AuthService = new AuthService();

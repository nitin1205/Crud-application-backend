import { IAuthDocument } from '@auth/interface/auth.interface';
import { AuthModel } from '@auth/models/auth.schema';
import { Helpers } from '@global/helpers/helpers';

class AuthService {
    public async createAuthUser(data: IAuthDocument): Promise<void> {
        await AuthModel.create(data);
    };

    public async getUserByNameOrEmail(name: string, email: string): Promise<IAuthDocument> {
        const query = {
            $or: [{ name: Helpers.firstLetterUppercase(name)}, { email: Helpers.lowerCase(email) }]
        };
        const user: IAuthDocument = (await AuthModel.findOne(query).exec()) as IAuthDocument;
        return user;
    };
};

export const authSrvice: AuthService = new AuthService();

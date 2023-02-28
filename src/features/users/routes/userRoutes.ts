import { authMiddleware } from '@global/helpers/Auth-middleware';
import { CreateUser } from '@user/controller/createUser';
import { DeleteUser } from '@user/controller/deleteUser';
import { GetAllUser } from '@user/controller/getAllUser';
import { Router } from 'express';


class UserRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
    };

    public routes(): Router {
        this.router.get('/user', authMiddleware.verifyAuthentication, GetAllUser.prototype.getAllUsers);
        this.router.post('/user', CreateUser.prototype.create);
        // this.router.post('/user', authMiddleware.verifyAdminOrManager);
        this.router.delete('/user',authMiddleware.verifyAdmin ,DeleteUser.prototype.delete);
        return this.router;
    };
};

export const userRoutes: UserRoutes = new UserRoutes();

import { CreateUser } from '@user/controller/createUser';
import { Router } from 'express';


class UserRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
    };

    public routes(): Router {
        this.router.post('/user', CreateUser.prototype.create);
        // this.router.post('/signin', SignIn.prototype.read);
        // this.router.get('/signout', SignOut.prototype.update);
        return this.router;
    };
};

export const userRoutes: UserRoutes = new UserRoutes();

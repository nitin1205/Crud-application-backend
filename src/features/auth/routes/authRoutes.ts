import { Router } from 'express';

import { Signup } from '@auth/controllers/singup';
import { SignIn } from '@auth/controllers/signin';
import { SignOut } from '@auth/controllers/signout';

class AuthRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
    };

    public routes(): Router {
        this.router.post('/signup', Signup.prototype.create);
        this.router.post('/signin', SignIn.prototype.read);
        this.router.get('/signout', SignOut.prototype.update);
        return this.router;
    };
};

export const authRoutes: AuthRoutes = new AuthRoutes();

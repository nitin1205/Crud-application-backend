import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '@root/config';
import { NotAuthorizedError, RequestValidationError } from './error-handler';

export class AuthMiddleware {
    public verifyAuthentication(req: Request, _res: Response, next: NextFunction): void {
        if (!req.session?.jwt) {
            throw new NotAuthorizedError('Access token not available. Login again');
        }
        next();
    };

    public verifyAdmin(req: Request, _res: Response, next: NextFunction) {
        const token = AuthMiddleware.prototype.verifyToken(req);
        jwt.verify(
            token,
            config.ACCESS_TOKEN_SECRET!,
            (error, decoded) => {
                if (error) throw new RequestValidationError('Forbidden');
                const decodedToken = decoded as { UserInfo: { name: string, roles: string } };
                if (decodedToken.UserInfo.roles.includes('Admin')) {
                    next();
                };
                throw new NotAuthorizedError('Not authorized');
            }
        );
    };
    
    public verifyManager(req: Request, _res: Response, next: NextFunction) {
        const token = AuthMiddleware.prototype.verifyToken(req);
        jwt.verify(
            token,
            config.ACCESS_TOKEN_SECRET!,
            (error, decoded) => {
                if (error) throw new RequestValidationError('Forbidden');
                const decodedToken = decoded as { UserInfo: { name: string, roles: string } };
                if (decodedToken.UserInfo.roles.includes('Manager')) {
                    next();
                };
                throw new NotAuthorizedError('Not authorized');
            }
        );
    };
    
    public verifyAdminOrManager(req: Request, _res: Response, next: NextFunction) {
        const token = AuthMiddleware.prototype.verifyToken(req);
        jwt.verify(
            token,
            config.ACCESS_TOKEN_SECRET!,
            (error, decoded) => {
                if (error) throw new RequestValidationError('Forbidden');
                const decodedToken = decoded as { UserInfo: { name: string, roles: string } };
                if (decodedToken.UserInfo.roles.includes('Manager')) {
                    next();
                };
                if (decodedToken.UserInfo.roles.includes('Admin')) {
                    next();
                };
                throw new NotAuthorizedError('Not authorized');
            }
        );
    };

    private verifyToken(req: Request) {
        const authHeader = req.headers.authorization || req.headers.Authorization as string;

        if (!authHeader?.startsWith('Bearer ')) {
            throw new NotAuthorizedError('Not authorized');
        };
        return authHeader.split(' ')[1];
    }
};

export const authMiddleware: AuthMiddleware = new AuthMiddleware();

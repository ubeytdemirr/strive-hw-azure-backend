import { NextFunction, Response } from 'express';
import ApiError from '../../classes/ApiError/ApiError';
import { IAuthRequest } from '../../typings/requests';
import { ISingleScope } from '../../typings/scopes';

const authorization = (scope: ISingleScope) => {
  return (req: IAuthRequest, _res: Response, next: NextFunction) => {
    if (req.user.scopes) {
      const hasScope = req.user.scopes.some(
        (s) => s.operations.includes(scope.operation) && s.name === scope.name,
      );
      if (!hasScope) {
        next(
          new ApiError(
            403,
            `Insufficient user role for ${scope.operation.toLowerCase()} ${scope.name.toLowerCase()}`,
            false,
          ),
        );
      } else next();
    } else {
      next(new ApiError(403, 'User does not have defined scope.', false));
    }
  };
};

export default authorization;

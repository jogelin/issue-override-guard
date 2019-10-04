import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class CustomGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    throw new Error('Shoudn\'t be called in tests');
  }
}

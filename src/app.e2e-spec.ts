import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { CustomGuard } from './custom.guard';

describe('Cats', () => {
  let app: INestApplication;
  const appService = { getHello: () => 'hello' };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(CustomGuard)
      .useValue({ canActivate: () => true })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET /hello`, () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect({
        data: appService.getHello(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { allUsers, mockById } from './mock/userMock';

import { app } from '../app';

import { Response } from 'superagent';
import Users from '../database/models/users';

chai.use(chaiHttp);

const { expect } = chai;

describe('testa as rotas userAddressAll', () => {
  const response = allUsers
  let chaiHttpResponse: Response;

  beforeEach(() => {
    sinon
      .stub(Users, "findAll")
      .resolves(response as unknown as Users[]);
  });

  afterEach(()=>{
    (Users.findAll as sinon.SinonStub).restore();
  })

  it('testa se retorna todos os usuarios', async () => {
    chaiHttpResponse = await chai.request(app).get('/user')

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(response);
  });
});

describe('testa a rota userById', () => {
  const response = mockById
  let chaiHttpResponse: Response;

    before(async () => {
      chaiHttpResponse = await chai.request(app).get('/user/1')
  });

  it('testa se retorna o usuario com o ID correto', async () => {
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(response);
  });
});


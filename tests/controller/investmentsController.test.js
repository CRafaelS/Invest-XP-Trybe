const sinon = require('sinon');
const { expect } = require('chai');
const investmentsServices = require('../../src/services/investmentsServices');
const investmentsController = require('../../src/controller/investmentsController');

describe('Testes da função buyAssets', async () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(investmentsServices, 'buyAssets')
      .resolves({ codClient: 1, codAtivo: 'XPBR31', qtdeAtivo: 1000 });
  })

  afterEach(() => {
    investmentsServices.buyAssets.restore();
  });

  it('é chamado o método "status" passando o código 201', async () => {
    await investmentsController.buyAssets(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });

  it('é chamado o método "json" passando um objeto', async () => {
    await investmentsController.buyAssets(request, response);

    expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
  });
});

describe('Testes da função buyAssets para tentar comprar mais ação que a disponivel', async () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(investmentsServices, 'buyAssets')
      .resolves(false);
  })

  afterEach(() => {
    investmentsServices.buyAssets.restore();
  });

  it('é chamado o método "status" passando o código 409', async () => {
    await investmentsController.buyAssets(request, response);

    expect(response.status.calledWith(409)).to.be.equal(true);
  });

  it('Retorna a seguinte mensagem: "quantity is not available"', async () => {
    await investmentsController.buyAssets(request, response);

    expect(response.json.calledWith({ message: 'quantity is not available' })).to.be.equal(true);
  });
});

describe('Testes da função sellAssets', async () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(investmentsServices, 'sellAssets')
      .resolves({ codClient: 1, codAtivo: 'XPBR31', qtdeAtivo: 1000 });
  })

  afterEach(() => {
    investmentsServices.sellAssets.restore();
  });

  it('é chamado o método "status" passando o código 201', async () => {
    await investmentsController.sellAssets(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });

  it('é chamado o método "json" passando um objeto', async () => {
    await investmentsController.sellAssets(request, response);

    expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
  });
});

describe('Testes da função sellAssets para tentar comprar mais ação que a disponivel', async () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(investmentsServices, 'sellAssets')
      .resolves(false);
  })

  afterEach(() => {
    investmentsServices.sellAssets.restore();
  });

  it('é chamado o método "status" passando o código 409', async () => {
    await investmentsController.sellAssets(request, response);

    expect(response.status.calledWith(409)).to.be.equal(true);
  });

  it('Retorna a seguinte mensagem: "there is not assets enough"', async () => {
    await investmentsController.sellAssets(request, response);

    expect(response.json.calledWith({ message: 'there is not assets enough' })).to.be.equal(true);
  });
});
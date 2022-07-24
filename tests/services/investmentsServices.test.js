const sinon = require('sinon');
const { expect } = require('chai');
const investmentsModels = require('../../src/models/investmentsModels');
const investmentsServices = require('../../src/services/investmentsServices');

describe('Verifica a função buyAssets da Models', () => {
  beforeEach(() => {
  sinon.stub(investmentsModels, 'quantityAsset').resolves([{ qtdeAtivo: 5150, idAtivo: 1 }]);
  sinon.stub(investmentsModels, 'getInvestAsset').resolves([{ qtdeAtivo: 3650}]);
  })

  afterEach(()=> {
    investmentsModels.quantityAsset.restore();
    investmentsModels.getInvestAsset.restore();
  })

  it('verifica se o retorno é um objeto', async () => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 1000;
    const responseBuy = await investmentsServices.buyAssets(codClient,codAtivo, qteAtivo);
    expect(responseBuy).to.be.a('object');
  })

  it('Verifica se o objeto possui as chaves: "codClient", "codAtivo" e "qtdeAtivo"', async () => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 1000;
    const responseBuy = await investmentsServices.buyAssets(codClient,codAtivo, qteAtivo);
    expect(responseBuy).to.include.all.keys('codClient','codAtivo','qtdeAtivo');
  });

  it('Retorna false se a quantidade de ativo passada for maior que a disponível', async() => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 10000;
    const responseBuy = await investmentsServices.buyAssets(codClient,codAtivo, qteAtivo);
    expect(responseBuy).to.be.false;
  })
});

describe('Verifica a função sellAssets da Models', () => {
  beforeEach(() => {
  sinon.stub(investmentsModels, 'quantityAsset').resolves([{ qtdeAtivo: 5150, idAtivo: 1 }]);
  sinon.stub(investmentsModels, 'getInvestAsset').resolves([{ qtdeAtivo: 3650}]);
  })

  afterEach(()=> {
    investmentsModels.quantityAsset.restore();
    investmentsModels.getInvestAsset.restore();
  })

  it('verifica se o retorno é um objeto', async () => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 1000;
    const responseSell = await investmentsServices.sellAssets(codClient,codAtivo, qteAtivo);
    expect(responseSell).to.be.a('object');
  })

  it('Verifica se o objeto possui as chaves: "codClient", "codAtivo" e "qtdeAtivo"', async () => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 1000;
    const responseSell = await investmentsServices.sellAssets(codClient,codAtivo, qteAtivo);
    expect(responseSell).to.include.all.keys('codClient','codAtivo','qtdeAtivo');
  });

  it('Retorna false se a quantidade a ser vendida for maior que a disponível', async() => {
    const codClient = 1;
    const codAtivo = 'XPBR31';
    const qteAtivo = 10000;
    const responseSell = await investmentsServices.sellAssets(codClient,codAtivo, qteAtivo);
    expect(responseSell).to.be.false;
  })
});

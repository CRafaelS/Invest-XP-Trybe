const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/models/connections');
const assetsModels = require('../../src/models/assetsModels');

describe('Verifica a função quantityAsset da Models', () => {
  beforeEach(() => {
    const result =  [[{ qtdeAtivo: 650000 }]]
  sinon.stub(connection, 'execute').resolves(result)
  })

  afterEach(()=> {
    connection.execute.restore();
  })

  it('verifica se o retorno é um array', async () => {
    const responseBD = await assetsModels.quantityAsset();
    expect(responseBD).to.be.a('array');
  })

  it('o array não esta vazio', async () => {
    const responseBD = await assetsModels.quantityAsset();
    expect(responseBD).to.be.not.empty;
  })

  it('é um array de objeto', async () => {
    const [response] = await assetsModels.quantityAsset();
    expect(response).to.deep.a('object');
  })

  it('Verifica se o objeto possui a chave: "qtdeAtivo"', async () => {
    const [response] = await assetsModels.quantityAsset();

    expect(response).to.include.all.keys('qtdeAtivo');
  });
});

describe('Verifica a função getInvestAsset da Models sé já existe o investimento', () => {
  beforeEach(() => {
    const result =  [[{ qtdeAtivo: 650000 }]]
  sinon.stub(connection, 'execute').resolves(result)
  })

  afterEach(()=> {
    connection.execute.restore();
  })

  it('verifica se o retorno é um array', async () => {
    const responseBD = await assetsModels.getInvestAsset();
    expect(responseBD).to.be.a('array');
  })

  it('o array não esta vazio', async () => {
    const responseBD = await assetsModels.getInvestAsset();
    expect(responseBD).to.be.not.empty;
  })

  it('é um array de objeto', async () => {
    const [response] = await assetsModels.getInvestAsset();
    expect(response).to.deep.a('object');
  })

  it('Verifica se o objeto possui a chave: "qtdeAtivo"', async () => {
    const [response] = await assetsModels.getInvestAsset();

    expect(response).to.include.all.keys('qtdeAtivo');
  });
});

describe('Verifica a função getInvestAsset da Models se é um novo investimento ', () => {
  beforeEach(() => {
    const result =  [[]]
  sinon.stub(connection, 'execute').resolves(result)
  })

  afterEach(()=> {
    connection.execute.restore();
  })

  it('verifica se o retorno é um array', async () => {
    const responseBD = await assetsModels.getInvestAsset();
    expect(responseBD).to.be.a('array');
  })

  it('Se o array esta vazio', async () => {
    const responseBD = await assetsModels.getInvestAsset();
    expect(responseBD).to.be.empty;
  })
});
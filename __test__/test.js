const clienteRepository = require('../../../../repository/sqlServer/escola_em_movimento/clienteRepository');
const baseRepository = require('../../../../repository/sqlServer/baseRepository');
jest.mock('mssql');
jest.mock('../../../../repository/sqlServer/baseRepository');
jest.mock('../../../../config', () => ({ db: { database: 'databaseTest' } }));

describe('clienteRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call method to query with correct values', async () => {
    expect.assertions(1);
    const servidorMock = 'servidor';
    const banco = 'databaseTest';
    const expectedQuery = `SELECT DISTINCT servidor 
                       FROM ${banco}.dbo.Cliente;`;
    const queryMock = jest.fn().mockReturnValueOnce({ recordset: [{ servidor: servidorMock }] });
    baseRepository.getPool.mockResolvedValueOnce({ request: () => ({ query: queryMock }) });

    await clienteRepository.listarServidores();

    expect(queryMock).toBeCalledWith(expectedQuery);
  });

});

import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIdividalCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and cpf', () => {
    const sut = createIdividalCustomer('Igor', 'Alves', '111.111');
    expect(sut).toHaveProperty('firstName', 'Igor');
    expect(sut).toHaveProperty('lastName', 'Alves');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIdividalCustomer('Igor', 'Alves', '111.111');
    expect(sut.getName()).toBe('Igor Alves');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});

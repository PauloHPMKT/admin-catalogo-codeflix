import InvalidUUIDError from "../../@seedwork/errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"

describe('UniqueEntityId unit tests', () => {
  it('sould test throw error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('fake uuid'))
      .toThrow(new InvalidUUIDError());
  })

  /** spyOn permite que eu pegue um objeto e observe uma variavel ou metodo*/
  it('sould test if validate method was not called', () => {
    // prototype é um objeto que contem metodos que podem ser acessados por todos os objetos de uma classe
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    expect(validateSpy).not.toHaveBeenCalled();
  })

  it('sould test if validate method was called once', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUUIDError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalled();
  })
})
import InvalidUUIDError from "../../@seedwork/errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"

describe('UniqueEntityId unit tests', () => {
  it('sould test throw error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('fake uuid'))
      .toThrow(new InvalidUUIDError())
  })
})
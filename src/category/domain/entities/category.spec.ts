import { omit } from "lodash";
import { Category } from "./Category";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

const makeSut = (id?: UniqueEntityId) => {
  const sut = new Category({ name: "Movies" }, id);
  return sut;
}

describe('Category Entity constructor unit tests', () => {
  it('should test a instance of Category Entity', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
    expect(sut).toBeInstanceOf(Category);
  })

  it('should create a Category by name', () => {
    const sut = makeSut();
    const props = omit(sut['props'], 'created_at');

    expect(props).toStrictEqual({
      name: "Movies",
      description: null,
      is_active: true,
    })
  })

  it('should check if created_at is a Date', () => {
    const sut = makeSut();
    expect(sut.created_at).toBeInstanceOf(Date);
  })

  it('should create a Category with all data', () => {
    const sut = makeSut();
    let created_at = new Date();

    sut['props'].description = "Movies category",
    sut['props'].is_active = false,
    sut['props'].created_at = created_at;

    const category = {
      name: "Movies",
      description: "Movies category",
      is_active: false,
      created_at
    }

    expect(sut['props']).toStrictEqual(category)
  })

  it('should create a category with name and description', () => {
    const sut = makeSut();
    sut['props'].description = "Movies category";

    // toMatchObject verifica se os objetos são iguais, sem se importar com a ordem das propriedades
    expect(sut['props']).toMatchObject({
      name: "Movies",
      description: "Movies category",
    });
  })

  it('should create a category with name and is_active', () => {
    const sut = makeSut();
    sut['props'].is_active = true;

    expect(sut['props']).toMatchObject({
      name: "Movies",
      is_active: true,
    });
  })

  it('should create a category with created_at', () => {
    const sut = makeSut();
    let created_at = new Date();
    sut['props'].created_at = created_at;

    expect(sut['props']).toMatchObject({
      name: "Movies",
      created_at,
    })
  })

  it('should test id is generated even null', () => {
    const sut = makeSut(null);
    expect(sut.id).not.toBeNull();
    expect(sut.id).toBeTruthy();
  })

  it('should test id is generated even undefined', () => {
    const sut = makeSut(undefined);
    expect(sut.id).not.toBeNull();
    expect(sut.id).toBeTruthy();
  })

  it('should test a valid uuid', () => {
    const id = new UniqueEntityId('f394ac59-9f52-4961-8720-29937ae62da1');
    const sut = makeSut(id);
    expect(sut.id).not.toBeNull();
    expect(sut.id).toBeTruthy();
    expect(sut.id).toBeInstanceOf(UniqueEntityId);
  })
})

describe('Category Entity getters and setters unit tests', () => {
  it('should test getter name field', () => {
    const sut = makeSut();
    expect(sut.name).toBe("Movies");
  })

  it('should test getter of descvription field', () => {
    const sut = makeSut();
    sut['props'].description = "Movies category";
    expect(sut.desription).toBe("Movies category");

    sut['props'].description = null;
    expect(sut.desription).toBeNull();
  })

  it('should test setter of description field', () => {
    const sut = makeSut();
    sut['description'] = "Other description";
    expect(sut['props'].description).toBe("Other description");

    sut['description'] = undefined;
    expect(sut['props'].description).toBeNull();
  })

  it('should test getter of is_active field', () => {
    const sut = makeSut();
    expect(sut.is_active).toBeTruthy();

    sut['props'].is_active = false;
    expect(sut.is_active).toBeFalsy();
  })

  it('should test setter of is_active field', () => {
    const sut = makeSut();
    sut['is_active'] = false;
    expect(sut['props'].is_active).toBeFalsy();

    sut['is_active'] = true;
    expect(sut['props'].is_active).toBeTruthy();
  })

  it('should test getter of created_at field', () => {
    const sut = makeSut();
    let created_at = new Date();
    sut['props'].created_at = created_at;

    expect(sut.created_at).toBe(created_at);
    expect(sut.created_at).toBeInstanceOf(Date);
  })
})

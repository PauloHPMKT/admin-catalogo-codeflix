import { omit } from "lodash";
import { Category } from "./Category";

const makeSut = () => {
  const sut = new Category({ name: "Movies" });
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
})


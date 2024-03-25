import { omit } from "lodash";
import { Category } from "./Category";

const makeSut = () => {
  const sut = new Category({ name: "Movies" });
  return sut;
}

describe('Category Entity unit tests', () => {
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
})

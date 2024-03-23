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

  it('should test Category Entity constructor', () => {
    const created_at = new Date();
    const category = new Category({ 
      name: "Movies",
      description: "Some description",
      is_active: true,
      created_at
    });
    expect(category['props']).toStrictEqual({
      name: "Movies",
      description: "Some description",
      is_active: true,
      created_at
    })
  })
})

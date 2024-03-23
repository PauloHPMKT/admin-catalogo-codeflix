import { Category } from "./Category"

describe('Category Entity', () => {
  it('should test Category Entity constructor', () => {
    const category = new Category('Movies')
    expect(category.name).toBe('Movies')
  })
})
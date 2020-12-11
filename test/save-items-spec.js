const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const categories = ['Cat 3', 'Cat 2'];
    const newCategory = 'Cat 1';
    const result = saveItems(categories, newCategory);
    expect(result).to.contain(newCategory);
    
  });

  it('makes sure the result and the original are different', () => {
    const categories = ['Cat 3', 'Cat 2'];
    const result = saveItems(categories, 'Cat 1');
    expect(result).to.not.equal(categories);
  });
});

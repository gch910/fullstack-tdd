const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let input = [];
      let result = mergeCategories(template, input, 'li')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.not.contain('<li>');
      expect(result).to.not.contain('</li>');
      
    });

    it("should return a single <li> for one category", () => {
      let input = ['animal'];
      let result = mergeCategories(template, input, 'li')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>animal</li>');
      
    });

    it("should return an <li> for each category", () => {
      let input = ['animal', 'vehicle', 'fruits'];
      let result = mergeCategories(template, input, 'li')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>animal</li>');
      expect(result).to.contain('<li>vehicle</li>');
      expect(result).to.contain('<li>fruits</li>');
      
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      let input = [];
      let result = mergeCategories(template, input, 'option')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.not.contain('<option>');
      expect(result).to.not.contain('</option>');
      
    });

    it("should return a single <option> for one category", () => {
      let input = ['red paint'];
      let result = mergeCategories(template, input, 'option')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain('<option>red paint</option>');
    
      
    });

    it("should return an <option> for each category", () => {
      let input = ['red paint', 'blue paint', 'green paint'];
      let result = mergeCategories(template, input, 'option')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain('<option>red paint</option>');
      expect(result).to.contain('<option>blue paint</option>');
      expect(result).to.contain('<option>green paint</option>');
    });
  });
});

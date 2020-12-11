const { expect } = require("chai");
const { mergeItems } = require("../merge-items");
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    let items = [];
    let result = mergeItems(template, items);
    expect(result).to.contain("<table>");
    expect(result).to.contain("</table>");
    expect(result).to.contain("<tbody>");
    expect(result).to.contain("</tbody>");
    expect(result).to.not.contain("<tr>");
    expect(result).to.not.contain("</tr>");
    expect(result).to.not.contain("<td>");
    expect(result).to.not.contain("</td>");
  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    let result = mergeItems(template, items);

    expect(result).to.contain("<table>");
    expect(result).to.contain("</table>");
    expect(result).to.contain("<tbody>");
    expect(result).to.contain("</tbody>");
    expect(result).to.contain("<tr>");
    expect(result).to.contain("</tr>");
    expect(result).to.contain("<td>Title 1</td>");
    expect(result).to.contain("<td>Category 1</td>");
    expect(result).to.contain('<form method="POST" action="/items/1">');
    expect(result).to.not.contain( "<!-- Content here -->");

    


    
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
    ];
    let result = mergeItems(template, items);

    expect(result).to.contain("<table>");
    expect(result).to.contain("</table>");
    expect(result).to.contain("<tbody>");
    expect(result).to.contain("</tbody>");
    expect(result).to.contain("<tr>");
    expect(result).to.contain("</tr>");
    expect(result).to.contain("<td>Title 1</td>");
    expect(result).to.contain("<td>Category 1</td>");
    expect(result).to.not.contain('<form method="POST" action="/items/1">');
    expect(result).to.not.contain( "<!-- Content here -->");


  });

  it("should return three <tr>s for three items", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
      { title: 'Title 2', category: 'Category 2', isComplete: true },
      { title: 'Title 3', category: 'Category 3', isComplete: true },
    ];
    let result = mergeItems(template, items);

    expect(result).to.contain("<table>");
    expect(result).to.contain("</table>");
    expect(result).to.contain("<tbody>");
    expect(result).to.contain("</tbody>");
    expect(result).to.contain("<tr>");
    expect(result).to.contain("</tr>");
    expect(result).to.contain("<td>Title 1</td>");
    expect(result).to.contain("<td>Category 1</td>");
    expect(result).to.contain("<td>Title 2</td>");
    expect(result).to.contain("<td>Category 2</td>");
    expect(result).to.contain("<td>Title 3</td>");
    expect(result).to.contain("<td>Category 3</td>");
    expect(result).to.not.contain('<form method="POST" action="/items/1">');
    expect(result).to.not.contain( "<!-- Content here -->");
  });
});

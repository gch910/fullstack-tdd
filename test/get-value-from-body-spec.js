const { expect } = require('chai');
const { getValueFromBody } = require('../get-value-from-body');

describe("The getValueFromBody function", () => {
  it('returns an empty string for an empty body', () => {
    // Arrange
    const body = "";
    const key = "notThere";

    // Act
    // Write code to invoke getValueFromBody and collect
    // the result
    const result = getValueFromBody(body, key)


    // Assert
    // Replace the fail line with an assertion for the
    // expected value of ""
    expect(result).to.eql(body);
  });

  it('returns an empty string for a body without the key', () => {
    // Arrange
    const body = "name=Bess&age=29&job=Boss";
    const key = "notThere";

    // Act
    // Write code to invoke getValueFromBody and collect
    // the result
    const result = getValueFromBody(body, key);

    // Assert
    // Replace the fail line with an assertion for the
    // expected value of ""
    expect(result).to.eql('');
  });

  it('returns the value of the key in a simple body', () => {
    const body = "name=Bess";
    const key = "name";

    // Act
    // Write code to invoke getValueFromBody and collect
    // the result
    const result = getValueFromBody(body, key);

    // Assert
    // Replace the fail line with an assertion for the
    // expected value of "Bess"
    expect(result).to.eql('Bess')
  });

  it('returns the value of the key in a complex body', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key = 'age'
    // Select one of the keys in the body

    // Act
    // Write code to invoke getValueFromBody and collect
    // the result
    const result = getValueFromBody(body, key);


    // Assert
    // Replace the fail line with an assertion for the
    // expected value for the key that you selected
    expect(result).to.eql('29')
  });

  it('decodes the return value of URL encoding', () => {
    const body = "name=Bess&age=29&job=Boss&level=Level%20Thirty-One";
    const key = "level";

    // Act
    // Write code to invoke getValueFromBody and collect
    // the result
    const result = getValueFromBody(body, key);


    // Assert
    // Replace the fail line with an assertion for the
    // expected value for the key that you selected that
    // has the encoded value in it
    expect(result).to.eql('Level Thirty-One')
  });
});

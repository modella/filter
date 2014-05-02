var expect = require('expect.js');
    modella = require('modella');
    filtered = require('../');


var User = modella('User')
           .attr('username')
           .attr('hashedPassword', {filtered: true})
           .attr('socialSecurityNumber');

User.use(filtered);

var user = new User({username: 'thisisauser',
                     hashedPassword: '129408158932dsjkaklfjsad',
                     socialSecurityNumber: '123-456-7890' });

describe("Filtered", function() {
  it("filters a single property", function() {
    var result = user.filter('socialSecurityNumber');

    expect(result).to.not.have.key('socialSecurityNumber');
    expect(result).to.have.key('username');
  });

  it("filters an array of properties", function() {
    var result = user.filter(['socialSecurityNumber', 'username']);

    expect(result).to.not.have.key('socialSecurityNumber');
    expect(result).to.not.have.key('username');
  });

  it("auto-filters properties defined with filter flag", function() {
    expect(user.filter()).to.not.have.key('hashedPassword');
  });

  it("can be used inside model#toJSON()", function() {
      User.prototype.toJSON = function() {
          return this.filter;
      };
      var user = new User({
          username: 'thisisauser',
          hashedPassword: '129408158932dsjkaklfjsad',
          socialSecurityNumber: '123-456-7890'
      });
      var result = user.filter('socialSecurityNumber');

      expect(result).to.not.have.key('socialSecurityNumber');
      expect(result).to.have.key('username');

  });
});

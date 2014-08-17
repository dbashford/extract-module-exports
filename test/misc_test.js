var exportNames = require("./util").exportNames;

it('Properly handles files that do not parse', function() {
  var names = exportNames( "does-not-parse", "misc" );
  expect(names).to.eql([]);
});

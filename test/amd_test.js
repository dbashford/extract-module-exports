var exportNames = require("./util").exportNames;

describe('For AMD files extract-module-exports should export the proper variable names', function() {

  it('for es6-transpiler defaults', function() {
    var names = exportNames( "es6-transpiler", "amd" );
    expect(names).to.eql(["SomeObject"]);
  });

  it('for files that appear to be es6-transpiler output but is not', function() {
    var names = exportNames( "fake-es6-transpiler", "amd" );
    expect(names).to.eql(["default", "SomethingElse"]);
  });

  it('for files that do not export anything', function() {
    var names = exportNames( "nothing-exported", "amd" );
    expect(names).to.eql([]);
  });

  it('for files that do not return anything', function() {
    var names = exportNames( "nothing-returned", "amd" );
    expect(names).to.eql([]);
  });

  it('for files that return anon function', function() {
    var names = exportNames( "returns-anon", "amd" );
    expect(names).to.eql([]);
  });

  it('for files that return null', function() {
    var names = exportNames( "returns-null", "amd" );
    expect(names).to.eql([]);
  });

  it('for files that return an object literal', function() {
    var names = exportNames( "returns-object", "amd" );
    expect(names).to.eql(["export1", "export2"]);
  });

  it('for files that return a string', function() {
    var names = exportNames( "returns-string", "amd" );
    expect(names).to.eql([]);
  });

  it('for files that return a variable', function() {
    var names = exportNames( "returns-variable", "amd" );
    expect(names).to.eql(["baz"]);
  });

  it('for files that user the AMD "exports" syntax', function() {
    var names = exportNames( "uses-exports", "amd" );
    expect(names).to.eql(["export1", "export2"]);
  });

});

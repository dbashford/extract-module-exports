var exportNames = require("./util").exportNames;

describe('For CommonJS files extract-module-exports should export the proper variable names', function() {

  it('for files that export anon functions', function() {
    var names = exportNames( "export-anon", "commonjs" );
    expect(names).to.eql([]);
  });

  it('for files that export null', function() {
    var names = exportNames( "export-null", "commonjs" );
    expect(names).to.eql([]);
  });

  it('for files that export a string', function() {
    var names = exportNames( "export-string", "commonjs" );
    expect(names).to.eql([]);
  });

  it('for files that attach variables to "exports"', function() {
    var names = exportNames( "export", "commonjs" );
    expect(names).to.eql(["export1", "export2"]);
  });

  it('for files that export a variable', function() {
    var names = exportNames( "exports-variable", "commonjs" );
    expect(names).to.eql(["Foo"]);
  });

  it('for files that export object literals', function() {
    var names = exportNames( "module-exports", "commonjs" );
    expect(names).to.eql(["export1","export2"]);
  });

  it('for that export nothing', function() {
    var names = exportNames( "no-exports", "commonjs" );
    expect(names).to.eql([]);
  });

});

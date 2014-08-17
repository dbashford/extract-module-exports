var fs = require('fs')
  , path = require( 'path' )
  ;

var readFile = function( name, type ) {
  var filePath = path.join( __dirname, "..", "assets", type, name + ".js" );
  return fs.readFileSync( filePath, "utf8");
}

exports.exportNames = function( name, type ) {
  var text = readFile( name, type );
  return modulenames(text);
}
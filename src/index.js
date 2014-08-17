"use strict";

var acorn
  , amdTraverse
  , commonTraverse
  ;

// Execute acorn parse
// If parse fails, return undefined ast
var _parseText = function( text ) {
  // lazy load
  if ( !acorn ) {
    acorn = require( "acorn" );
  }

  var ast;
  try {
    ast = acorn.parse( text );
  } catch ( err ) {
    // just going to let ast remain undefined
  }
  return ast;
};

var _determineIfAMD = function( ast ) {
  return true;
};

module.exports = function( text ) {
  var ast = _parseText( text );
  if ( !ast ) {
    return [];
  }

  var isAMD = _determineIfAMD( ast );

  var names = [];
  if ( isAMD ) {
    // lazy load
    if ( !amdTraverse ) {
      amdTraverse = require( "./amd" );
    }
    names = amdTraverse.names( ast );
  } else {
    // lazy load
    if ( !commonTraverse ) {
      commonTraverse = require( "./commonjs" );
    }
    names = commonTraverse.names( ast );
  }

  return names;
};

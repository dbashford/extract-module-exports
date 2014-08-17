define(
["foo", "exports"],
function(__dependency1__, __exports__) {
  var SomeObject = __dependency1__;
__exports__["default"] = SomeObject;
__exports__.SomethingElse = Object;

});

// happens to export a default, but once exports something else
// to be treated like not es6-transpiler
//
// 2 named exports
// default
// SomethingElse

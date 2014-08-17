define(
  ["foo","bar", "exports"],
function(foo, bar, __exports__) {
  foo = "baz";
  bar(foo);

});

// no named exports

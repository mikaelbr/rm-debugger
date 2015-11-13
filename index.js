'use strict';

// codemod for removing debugger statements

module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.DebuggerStatement)
    .forEach(function (path) {
      j(path).remove()
    })
    .toSource();
}

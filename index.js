/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Vadim Loginov @vadimatp
*/
'use strict';

module.exports = function(source) {
  var data;
  var constantNames;
  var i;
  var output;
  var moduleName;
  var standalone;
  try {
    data = JSON.parse(source);
  } catch (e) {
    this.emitError(this.resourcePath + ' must be a valid json object');
    return '';
  }
  moduleName = this.query.moduleName || 'constants';
  standalone = this.query.standalone || true;

  constantNames = Object.keys(data);
  if (!constantNames.length) {
    this.emitError(this.resourcePath + ' must be a valid json object');
  }
  output = '"use strict";export default angular.module("' + moduleName + '"' + (standalone ? ', []' : '') + ')';
  for (i in constantNames) {
    output += '\n  .constant("' + constantNames[i] + '", ';
    output += JSON.stringify(data[constantNames[i]]);
    output += ')';
  }

  output += ';';
  return output;
};

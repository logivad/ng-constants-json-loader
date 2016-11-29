/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Vadim Loginov @vadimatp
*/
module.exports = function(source) {
  var data;
  var currentConstantName;
  var currentConstantKey;
  var constantNames;
  var currentConstantKeys;
  var output;
  var moduleName;
  try {
    data = JSON.parse(source);
  } catch (e) {
    this.emitError(this.resourcePath + ' must be a valid json object');
    return '';
  }
  console.log('this.query', this.query);
  moduleName = this.query.moduleName || 'constants';
  standalone = this.query.standalone || true;

  constantNames = Object.keys(data);
  output = 'angular.module("' + moduleName + '"' + (standalone ? ', []' : '') + ')\n';
  for (currentConstantName = 0; currentConstantName < constantNames.length; currentConstantName++) {
    output += '\n  .constant("' + constantNames[currentConstantName] + '", {\n';
    currentConstantKeys = Object.keys(data[constantNames[currentConstantName]]);
    for (currentConstantKey = 0; currentConstantKey < currentConstantKeys.length; currentConstantKey++) {
      output += '    "' + currentConstantKeys[currentConstantKey] + '": "' +
        data[constantNames[currentConstantName]][currentConstantKeys[currentConstantKey]];
      if (currentConstantKey + 1 !== currentConstantKeys.length) {
        output += '",\n';
      } else {
        output += '"\n';
      }
    }
    output += '  })';
  }

  output += ';';

  return output;
};

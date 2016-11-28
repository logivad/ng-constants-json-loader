# ng-constants-json-loader for webpack

This loader transforms json object into angular module with constants. Each key from the given json object will create a separate constant.

## Installation

TODO

## Usage

Given a webpack config

``` javascript
module: {
  rules: [
    {
      // Let's take our config file by absolute url
      test: path.resolve(__dirname + 'app/config.json'),
      loader: 'ng-constants-json-loader.js',
      query: {
        // default
        moduleName: 'constants',
        // Should it be a standalone module:
        //   angular.module('name', [])
        // or not:
        //   angular.module('name')
        standalone: true
      }
    }
  ]
}
```

and config.json

``` json
{
  "api": {
    "url": "http://example.com"
  }, 
  "settings": {
    "lang": "en"
  }
}
```

the loader will emit an angular module

``` javascript
angular.module("constants", [])

  .constant("api", {
    "url": "http://example.com"
  })
  .constant("settings", {
    "lang": "en"
  });
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

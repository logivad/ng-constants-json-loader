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
        // default
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

we will get a module

``` javascript
angular.module("constants", [])

  .constant("api", {
    "url": "http://example.com"
  })
  .constant("settings", {
    "lang": "en"
  });
```

``` javascript
query: {
  moduleName: 'moduleName',
  standalone: false
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

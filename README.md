[![Build Status](https://secure.travis-ci.org/jenbuzz/react-hackernews.png?branch=master)](http://travis-ci.org/jenbuzz/ngx-metafrenzy)

# react-hackernews

Add a HackerNews feed to your React app.

## Installation

```bash
$ npm install react-hackernews
```

or

```
$ yarn add react-hackernews
```

## Usage

```javascript
import React from 'react';
import HackerNews from 'react-hackernews';

const MyComponent = () => <HackerNews />;
```

### Options

| Name  | Allowed values                             | Default |
| ----- | ------------------------------------------ | ------- |
| type  | 'new', 'top', 'best', 'ask', 'show', 'job' | 'top'   |
| limit | number                                     | 10      |

```javascript
import React from 'react';
import HackerNews from 'react-hackernews';

const MyComponent = () => <HackerNews type="new" limit="100" />;
```

### Styling

The feed is wrapped in a container with the classname "react-hackernews".

## License

This package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## vue-fetch-plugin

fetch plugin for Vuejs project

## How to use

```bash
npm install --save vue-fetch-plugin
```

Then configure in your entry file:

```javascript
import Vue from 'Vue'
import VueFetchPlugin from 'vue-fetch-plugin'

Vue.use(VueFetchPlugin, {
  // fetch options
  ...
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  },
  ...
  // request interceptor handler
  reqInterceptor: request => request,
  ...
  // response interceptor handler
  resFilter: response => response,
  resError: error => error
})
```

## Example

Default method in `$fetch`、`$get`、`$post`:

```javascript
...
methods: {
  async getTest() {
    const result = await this.$get('url');
    console.log(result);
  },
  async postTest() {
    const result = await this.$post('url', {name: 'kid'});
    console.log(result);
  },
  async fetchTest() {
    const result = await this.$fetch('url', {
        credentials: 'include',
        body: {
          name: 'kid'
        },
        method: 'POST'
      });
    console.log(result);
  }
}
...
```

Or you can use like this:

```javascript
import myFetch from 'vue-fetch-plugin';
...
router.beforeEach(async (to, from, next) => {
    ...
    const result1 = await myFetch.post('url', {name: 'kid'});
    const result2 = await myFetch.get('url');
    ...
});
...
```

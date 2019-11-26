# Sample code for Issue 114

This is a simple sample code to demonstrate issue https://github.com/adobe/htlengine/issues/114

## Steps of replicating the issue

- Use the following command to run code with @adobe/htlengine 3.2.7, which will output the generated html.
```bash
npm run dev7
```
- Use the following command to run code with @adobe/htlengine 3.2.8, which will throw an error unless you change path from 'inline-svg-utility.js' to '../../../../../inline-svg-utility.js' in example1.htl
```bash
npm run dev8
```



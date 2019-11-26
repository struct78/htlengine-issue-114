# Sample code for HTL Engine Issue 114

This is a simple sample code to demonstrate issue https://github.com/adobe/htlengine/issues/114 of @adobe/htlengine.

## Steps of replicating the issue

- Use the following command to run code with @adobe/htlengine 3.2.7, which will output the generated html.
```bash
npm run dev7
```
- Use the following command to run code with @adobe/htlengine 3.2.8, which will throw an error unless you change class name from 'com.companyname.classname.SvgUtility' to '../../../../../modules/com.companyname.classname.SvgUtility' in src/example.htl
```bash
npm run dev8
```

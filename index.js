const { Compiler, Runtime } = require('@adobe/htlengine');
const fse = require('fs-extra');

async function run() {
  // setup the HTL compiler
  const compiler = new Compiler().withRuntimeVar('document');

  // read template from a file
  const code = await fse.readFile('./example.htl', 'utf-8');

  // compile the script to a executable template function
  const template = await compiler.compileToFunction(code);

  // create the HTL runtime
  const runtime = new Runtime();

  // finally, execute the template. the result is a Document.
  const result = await template(runtime);
  return `${result}`;
}

run().then(console.log).catch(console.error);

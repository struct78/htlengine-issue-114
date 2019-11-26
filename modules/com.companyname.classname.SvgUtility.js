const fse = require('fs-extra');
const path = require('path');

// This class represents a JS version of a Java implementaiton that does the same thing: Read SVGs from the file system
class InlineSvgUtility {
  async use() {
    if (!this.svgPath) {
      return {
        title: 'SVG Example Error - Please provide svgPath',
        svgItem: '',
      }
    }

    const data = await fse.readFile(path.resolve(path.join('./', this.svgPath)), 'utf-8');

    return {
      svgItem: data
    };
  }
}

module.exports = InlineSvgUtility;

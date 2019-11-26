const fse = require('fs-extra');
const path = require('path');

class InlineSvgUtility {
  async use() {
    const assetsPath = 'assets/icons/';

    if (!this.svgPath) {
      return {
        title: 'SVG Example Error - Please provide svgPath',
        svgItem: '',
      }
    }

    const data = await fse.readFile(path.join(assetsPath, this.svgPath), 'utf-8');

    return {
      title: 'SVG Example',
      svgItem: data
    };
  }
}

module.exports = InlineSvgUtility;

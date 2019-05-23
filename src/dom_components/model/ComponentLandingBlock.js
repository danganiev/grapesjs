const Component = require('./Component');

module.exports = Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Блок',
      type: 'LandingBlock'
    }
  }
  // {
  //   isComponent(el) {
  //     if (el.tagName == 'LABEL') {
  //       return { type: 'label' };
  //     }
  //   }
  // }
);

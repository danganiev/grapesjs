const Component = require('./Component');

module.exports = Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Секция',
      type: 'section'
    }
  },
  {
    isComponent(el) {
      // TODO: на всякий случай дивы тоже разрешить для олдскульных клиентов типа style="landing-section" или
      // gjs-type="section"
      if (el.tagName == 'SECTION') {
        return { type: 'section' };
      }
    }
  }
);

import Component from './Component';
import { clone } from 'underscore';

export default Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Колонка',
      type: 'content-grid-cell',
      tagName: 'div'
      //   hasSettings: true
    },

    init() {}
  },
  {
    isComponent(el) {
      // naming is not landing-content-grid-cell due to conflicts in detecting component after html parse
      if (el.tagName == 'DIV' && el.className.includes('landing-content-cell-grid')) {
        return { type: 'content-grid-cell' };
      }
    }
  }
);

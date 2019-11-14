import Component from './Component';
import { clone } from 'underscore';

export default Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Грид с колонками',
      type: 'content-grid',
      tagName: 'div',
      hasSettings: true
    },

    init() {}
  },
  {
    isComponent(el) {
      if (el.tagName == 'DIV' && el.className.includes('landing-content-grid')) {
        return { type: 'content-grid' };
      }
    }
  }
);

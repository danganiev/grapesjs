import Component from './Component';
import { clone } from 'underscore';

export default Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Секция',
      type: 'section',
      tagName: 'section',
      // Component can be toggled for permission for children to be changed and selected and dropped into
      childrenAreProtected: true,
      hasSettings: true
    },

    init() {
      this.toggleChildrenEditable();
    },

    toggleChildrenEditable() {
      let value = this.toggleChildren;
      const components = this.get('components');

      const recursionToggle = components => {
        components.each((component, key) => {
          component.set('selectable', value);
          component.set('hoverable', value);
          component.set('highlightable', value);
          recursionToggle(component.get('components'));
        });
      };

      recursionToggle(components);
      this.toggleChildren = !value;
      this.setEditToolbarButtons();
    },

    initToolbar(...args) {
      this.toggleChildren = false;
      Component.prototype.initToolbar.apply(this, args);
      // const em = this.em;

      var tb = this.get('toolbar');
      this.defaultToolbar = clone(tb);
      // if (em) {
      //   // var cmd = em.get("Commands");

      // }
      this.setEditToolbarButtons();
    },

    setEditToolbarButtons() {
      let tb = clone(this.defaultToolbar);
      var cmdName = 'core:toggle-children-edit';

      if (this.toggleChildren) {
        tb.push({
          attributes: {
            class: 'fa fa-pencil',
            title: 'Разрешить редактирование секции'
          },
          command: cmdName
        });
      } else {
        tb.push({
          attributes: {
            class: 'fa fa-ban',
            title: 'Запретить редактирование секции'
          },
          command: cmdName
        });
      }
      this.set('toolbar', tb);
    }
  },
  {
    isComponent(el) {
      // TODO: на всякий случай дивы тоже разрешить для олдскульных клиентов типа style="landing-section" или
      // gjs-type="section"
      // А может и хуй с ними, пусть верстают по моим правилам
      if (el.tagName == 'SECTION') {
        return { type: 'section' };
      }
    }
  }
);

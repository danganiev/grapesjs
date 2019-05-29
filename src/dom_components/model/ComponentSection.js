const Component = require('./Component');

module.exports = Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      name: 'Секция',
      type: 'section',
      // Component can be toggled for permission for children to be changed and selected and dropped into
      childrenAreProtected: true
    },

    init() {
      this.toggleChildren = false;
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
    },

    initToolbar(...args) {
      Component.prototype.initToolbar.apply(this, args);
      const em = this.em;

      if (em) {
        var cmd = em.get('Commands');
        var cmdName = 'core:toggle-children-edit';

        // if (cmd.has(cmdName)) {
        // let hasButtonBool = false;
        var tb = this.get('toolbar');

        // for (let i = 0; i < tb.length; i++) {
        //   if (tb[i].command === "image-editor") {
        //     hasButtonBool = true;
        //     break;
        //   }
        // }

        // if (!hasButtonBool) {
        tb.push({
          attributes: {
            class: 'fa fa-pencil',
            title: 'Разрешить редактирование секции'
          },
          command: cmdName
        });
        this.set('toolbar', tb);
        // }
        // }
      }
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

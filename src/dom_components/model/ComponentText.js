import Component from './Component';

let LandingComponent = Component.extend({
  defaults: {
    ...Component.prototype.defaults,
    selectable: true,
    highlightable: true,
    hoverable: true,
    draggable: false,
    droppable: false,
    resizable: false,
    editable: true
  }
});

export default LandingComponent.extend({
  defaults: {
    ...LandingComponent.prototype.defaults,
    type: 'text',
    // selectable: true,
    // highlightable: true,
    // hoverable: true,
    // draggable: false,
    // droppable: false,
    // resizable: false,
    // editable: true,
    name: 'Текст'
  },

  toHTML() {
    this.trigger('sync:content', { silent: 1 });
    return Component.prototype.toHTML.apply(this, arguments);
  }
});

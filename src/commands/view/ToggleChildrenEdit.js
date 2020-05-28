export default {
  run(ed, sender, opts = {}) {
    let component = opts.component || ed.getSelected();

    // if (!component || !component.get('childrenAreProtected')) {
    //   console.warn("The element doesn't want to protect its children", component);
    //   return;
    // }

    if (component) {
      component.toggleChildrenEditable();
    }

    component.em.trigger('component:updateToolbar');
    return component;
  }
};

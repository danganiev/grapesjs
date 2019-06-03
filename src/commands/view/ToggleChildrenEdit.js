module.exports = {
  run(ed, sender, opts = {}) {
    let component = opts.component || ed.getSelected();

    if (!component || !component.get('childrenAreProtected')) {
      console.warn(
        "The element doesn't want to protect it's children",
        component
      );
      return;
    }

    if (component) {
      component.toggleChildrenEditable();
    }

    // const tb = component.get("toolbar");
    // tb.push({
    //   attributes: {
    //     class: "fa fa-anchor",
    //     title: "Запретить редактирование секции"
    //   },
    //   command: "bla"
    // });
    // component.set("toolbar", tb);
    component.em.trigger('component:updateToolbar');
    return component;
  }
};

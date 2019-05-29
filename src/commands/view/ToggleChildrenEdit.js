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

    return component;
  }
};

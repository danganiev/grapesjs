import ComponentText from './ComponentText';

export default ComponentText.extend(
  {
    defaults: {
      ...ComponentText.prototype.defaults,
      type: 'quilltext'
    }
  },
  {
    isComponent(el) {
      var result = '';
      if (el.classList && el.classList.contains('ql-container')) {
        result = {
          type: 'quilltext',
          content: el.innerHTML
        };
      }
      return result;
    }
  }
);

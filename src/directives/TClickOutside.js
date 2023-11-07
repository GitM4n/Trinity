export default {
    mounted(el, binding) {
      const onClick = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };

      document.addEventListener('click', onClick);

      el._outsideClickCallback = onClick;
    },
    unmounted(el) {
      document.removeEventListener('click', el._outsideClickCallback);
      delete el._outsideClickCallback;
    },

}
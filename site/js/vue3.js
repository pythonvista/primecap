const { createApp, ref } = Vue;

createApp({
  data: () => ({
    mn: 'hiii'
  }),
  setup() {
    const message = ref('Hello vue!');
    return {
      message,
    };
  },
}).mount('#app');

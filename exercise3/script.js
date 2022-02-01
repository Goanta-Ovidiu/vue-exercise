Vue.createApp({
  data() {
    return {
      activeTab: true,
    };
  },
  methods: {
    change() {
      this.activeTab = !this.activeTab;
      console.log(this.activeTab.target);
    },
  },
}).mount("#app");

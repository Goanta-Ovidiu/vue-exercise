Vue.createApp({
  data() {
    return {
      headline: "Attribute Bending",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "Animal",
      },
    };
  },
}).mount("#app");

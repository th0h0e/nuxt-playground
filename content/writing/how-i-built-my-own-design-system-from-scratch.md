---
title: How I Built My Design System from Scratch
description: A practical guide to creating your own design system, from initial audit to implementation, and the lessons learned along the way.
author:
  name: Soft Spoken Studio
  avatar:
    src: download.jpg
    alt: Soft Spoken Studio
date: 2025-03-05T00:00:00.000Z
image:
  src: /download.jpg
  alt: Random Image 1
minRead: 8
---

This is my test code:

```js [file.js] {2} meta-info=val
export default () => {
  console.log("Code block");
};
```

Works well for .js files what about vue?

```ts [app.config.ts]
export default defineAppConfig({
  toc: {
    // Title of the main table of contents
    title: "Table of Contents",
    // Customize links
    bottom: {
      // Title of the bottom table of contents
      title: "Community",
      // URL of your repository content folder
      edit: "https://github.com/nuxt-ui-pro/docs/edit/main/content",
      links: [{
        icon: "i-lucide-star",
        label: "Star on GitHub",
        to: "https://github.com/nuxt/ui",
        target: "_blank"
      }, {
        icon: "i-lucide-book-open",
        label: "Nuxt UI docs",
        to: "https://ui.nuxt.com/getting-started/installation",
        target: "_blank"
      }]
    }
  }
});
```

Now:

```vue [MyComponent.vue]
<script setup>
const count = ref(0);
</script>

<template>
  <button @click="count++">
    {{ count }}
  </button>
</template>

  <style scoped>
  button {
  color: red;
}
</style>
```

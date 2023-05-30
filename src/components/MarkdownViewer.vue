<template>
  <div v-html="content"></div>
</template>

<script>
import frontmatterMarkdown from "frontmatter-markdown-loader";

export default {
  props: ["file"],
  data() {
    return {
      content: "",
    };
  },
  async mounted() {
    const response = await fetch(this.file);
    const markdown = await response.text();
    const { content } = frontmatterMarkdown(markdown);
    this.content = content;
  },
};
</script>

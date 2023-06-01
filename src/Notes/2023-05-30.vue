<template>
  <div class="q-pa-md q-gutter-sm">
    <q-toggle v-model="model" label="Disable highlighting" />
    <!-- eslint-disable vue/html-indent -->
    <q-markdown :no-highlight="model" no-line-numbers show-copy>
      ---
      title: My First Post
      date: 2023-05-30
      categories:
        - Blog
        - Quasar
      ---
      # vue-cli 安裝
      > 1. 全域方式安裝 vue-cli
      >	 -  `npm install -g @vue/cli`
      > 2. 驗證 vue 安裝版本
      > 	 - `vue -V`
      > 3. 建立 vue 3 專案
      > 	 - `vue create blog`
      > 4. 進入專案
      > 	 - `cd blog`
      ---
      # Quasar 安裝
      > 1. 全域方式安裝 Quasar CLI
      >	 - `npm install -g @quasar/cli`
      > 2. 驗證 Quasar 安裝版本
      >	 - `quasar -v`
      > 3. 部屬 Quasar 環境
      >	 - `npm init quasar`
      > 4. 進入專案
      > 	 - `cd blog`
      > 5. 開始開發
      >	 - `quasar dev`

      # 採坑紀錄
      ## npm 重裝
      > 刪除位旨：
      >  - C:\Users\{User}\AppData\Local\npm-cache
    </q-markdown>
    <!-- eslint-enable vue/html-indent -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { QMarkdown } from "@quasar/quasar-ui-qmarkdown";
import "@quasar/quasar-ui-qmarkdown/dist/index.css";

export default defineComponent({
  name: "CopyToClipboard",
  components: {
    QMarkdown,
  },

  setup() {
    const model = ref(false);

    return {
      model,
    };
  },
});
</script>

/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/

export const htmlContent = `
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
`;

export const mainJsContent = `import { createApp } from "vue";
import bkuiVue from "bkui-vue";
import Demo from "./demo.vue";
import "bkui-vue/dist/style.css";

const app = createApp(Demo);
app.use(bkuiVue);
app.mount("#app");
`;

export const styleContent = `
  /* 竖排展示 demo 行间距 16px */
  .tdesign-demo-block-column {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  /* 竖排展示 demo 行间距 32px */
  .tdesign-demo-block-column-large {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  /* 横排排展示 demo 列间距 16px */
  .tdesign-demo-block-row {
    display: flex;
    column-gap: 16px;
    align-items: center;
  }
`;

export const stackblitzRc = `
  {
    "installDependencies": false,
    "startCommand": "turbo && turbo dev"
  }
`;

export const viteConfigContent = `
  import { defineConfig } from 'vite';
  import { createVuePlugin } from 'vite-plugin-vue2';

  export default defineConfig({
    plugins: [
      createVuePlugin({ jsx: true }),
    ],
  });
`;

export const packageJSONContent = `{
  "name": "bk-magic-vue",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "3.2.x",
    "bkui-vue": "latest"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0-0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not dead"]
}`;

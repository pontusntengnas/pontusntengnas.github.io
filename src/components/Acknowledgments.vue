<template>
  <div>
    <div class="header">
      <b-container class="bv">
        <b-row align-h="start">
          <canvas ref="backArrow" width="40" height="40"></canvas>
          <b-col cols="4"><router-link to="/" id="link-back">Back</router-link></b-col>
          <b-col cols="4"  offset-md="0"><h4 id="title">Licenses</h4></b-col>
        </b-row>
      </b-container>
    </div>
    <p>This app was created with the following amazing products:</p>
    <div class="licenses-list">
      <div v-for="item in acknowledgments" v-bind:key="item.title">
        <h5>{{ item.title }}</h5>
        <a v-bind:href="`${item.url}`" target="_blank">{{ item.url }}</a>

        <div class="license-container">
          <p class="license-text" v-for="text in item.licenseText" v-bind:key="text">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Acknowledgment } from './../models/acknowledgment';

@Component
export default class Acknowledgments extends Vue {
  private acknowledgments: Acknowledgment[] = [
    new Acknowledgment('BootstrapVue', 'https://github.com/bootstrap-vue/bootstrap-vue',
      ['The MIT License (MIT)',
      'Copyright (c) 2016-2019 - BootstrapVue',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`]),
    new Acknowledgment('Vue.js', 'https://github.com/vuejs/vue',
      ['The MIT License (MIT)',
      'Copyright (c) 2013-present, Yuxi (Evan) You',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.`]),
    new Acknowledgment('core-js', 'https://github.com/zloirock/core-js',
      ['The MIT License (MIT)',
      'Copyright (c) 2014-2019 Denis Pushkarev',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.`]),
    new Acknowledgment('vue-class-component', 'https://github.com/vuejs/vue-class-component',
      ['The MIT License (MIT)',
      'Copyright (c) 2015-present Evan You',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.`]),
    new Acknowledgment('Vue Property Decorator', 'https://github.com/kaorun343/vue-property-decorator',
      ['The MIT License (MIT)',
      'Copyright (c) 2018 kaorun343',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.`]),
    new Acknowledgment('vue-router', 'https://github.com/vuejs/vue-router',
      ['MIT License',
      'Copyright (c) 2013-present Evan You',
      `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:`,
      `The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.`,
      `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`]),
  ].sort((a, b) => a.title.localeCompare(b.title));

  private mounted() {
    // this.drawArrow();
  }

  private drawArrow() {
    const arrow = this.$refs.backArrow as HTMLCanvasElement;
    const arrowCtx = arrow.getContext('2d');
    if (arrowCtx == null) {
      return;
    }

    arrowCtx.moveTo(0, 20);
    arrowCtx.fillRect(0, 0, 10, 10);
  }
}

</script>

<style scoped lang="scss">
.licenses-list {
  text-align: left;
  margin: 40px 60px;
}
.license-container{
  background-color: $primary-gray;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
}
.license-text {
  font-size: 14px;
  margin-bottom: 8px;
  font-family: monospace;
}
h5 {
  margin-top: 20px;
}
</style>

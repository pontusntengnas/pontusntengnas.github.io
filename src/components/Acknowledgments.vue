<template>
  <div>
    <div class="header">
      <canvas id="back-arrow" ref="backArrow" @click="backPressed" width="40" height="40"></canvas>
       <h4 id="title">Licenses</h4>
       <canvas id="_invisible_canvas" width="40" height="40"></canvas>
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
    this.drawArrow();
  }

  private backPressed() {
    return this.$router.back();
  }

  private drawArrow() {
    const arrow = this.$refs.backArrow as HTMLCanvasElement;
    const arrowCtx = arrow.getContext('2d');
    if (arrowCtx == null) {
      return;
    }

    arrowCtx.strokeStyle = '#c69393';
    arrowCtx.lineWidth = 2;
    arrowCtx.lineCap = 'round';
    arrowCtx.moveTo(10, 1);
    arrowCtx.lineTo(2, 9);
    arrowCtx.lineTo(10, 17);
    arrowCtx.moveTo(2, 9);
    arrowCtx.lineTo(24, 9);
    arrowCtx.stroke();

    arrow.onmousemove = () => {
      arrow.style.cursor = 'pointer';
      arrow.style.transition = '0.4s';
      arrow.style.opacity = '0.6';
    }

    arrow.onmouseleave = () => {
      arrow.style.opacity = '1';
    }
  }
}

</script>

<style scoped lang="scss">
.header {
  margin: 0px 5%;
  display: flex;
  justify-content: space-between;
}
.licenses-list {
  text-align: left;
  margin: 40px 5%;
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

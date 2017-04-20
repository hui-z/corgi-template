import { sleep } from './utils/utils';

if (__DEV__) {
  console.log('当前为开发环境');
}

export default class {
  async onLaunch() {
    try {
      await sleep(100);
    } catch (error) {
      console.error(error);
    }
    this.timer();
  }

  async timer() {
    while (true) {
      console.log('hello');
      await sleep(10000);
    }
  }
}

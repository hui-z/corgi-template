import { sleep } from '../../utils/utils';

export default {
    data: {
        name: 'zaihui',
    },
    onUpdate() {
        console.log('update');
    },
    async onPullDownRefresh() {
        await sleep(1000);
        wx.showToast({title: '刷新成功'});
        wx.stopPullDownRefresh();
    }
}
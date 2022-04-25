export const NAVIGATION_TYPE = {
    0: {
        value: 'TYPE_NAVIGATE',
        type: 0,
        describe: '网页通过点击链接、地址栏输入、表单提交、脚本操作等方式加载'
    },
    1: {
        value: 'TYPE_RELOAD',
        type: 1,
        describe: '网页通过“重新加载”按钮或者location.reload()方法加载'
    },
    2: {
        value: 'TYPE_BACK_FORWARD',
        type: 2,
        describe: '网页通过“前进”或“后退”按钮加载，相当于常数'
    },
    255: {
        value: 'TYPE_UNDEFINED',
        type: 255,
        describe: '通过任何其他来源的加载'
    }
};

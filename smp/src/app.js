export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      scripts: [
        {id: '1', name: 'C2M', type: 'javaScript', desc: 'CSDN文章搬迁到慕课的脚本',author: 'Fizz', createTime: '2019年12月18日11:29:15', updateTime: '2019年12月18日11:29:15'},
        {id: '2', name: 'allOpen', type: 'javaScript', desc: '一键打开所有项目页面',author: 'Fizz', createTime: '2019年12月18日11:29:15', updateTime: '2019年12月18日11:29:15'},
        {id: '3', name: 'RM', type: 'javaScript', desc: '基于页面结构化数据一键生成报表,支持各种图表导出',author: 'Fizz', createTime: '2019年12月18日11:29:15', updateTime: '2019年12月18日11:29:15'},
        {id: '4', name: 'auto fill login form', type: 'javaScript', desc: '自动填充登录表单',author: 'Fizz', createTime: '2019年12月18日11:29:15', updateTime: '2019年12月18日11:29:15'},
        {id: '5', name: 'maginCopy', type: 'python', desc: '递归拷贝多个文件夹',author: 'Fizz', createTime: '2019年12月18日11:29:15', updateTime: '2019年12月18日11:29:15'}
      ]
    }
  },
};

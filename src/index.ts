// src/index.js 示例，主要是引入(import)组件再导出(export)，包括Vue.use所需的 install函数处理
import MyButton from '../packages/my-button/index';
const components = [MyButton];

// Vue.use() 一次性安装所有组件
const install = (Vue: any) => {
  components.forEach((component: any) => Vue.use(component));
  // 如果没有在src/index.js里实现install方法，就需要使用下面的
  // components.forEach(component => Vue.component(component.name, component))
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  install, // 用于ES modules，import Vue 后直接使用 Vue.use()
  MyButton,  // 支持解构赋值按需引入单个组件
};

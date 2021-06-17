// @ts-ignore
import MyButton from './src/MyButton';

/* istanbul ignore next */
MyButton.install = (Vue: any) => {
  Vue.component(MyButton.name, MyButton);
};

export default MyButton;

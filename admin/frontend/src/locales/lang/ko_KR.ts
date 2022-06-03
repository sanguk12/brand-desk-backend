import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/ko_KR';

const modules = import.meta.globEager('./ko-KR/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'ko-KR'),
    antdLocale,
  },
};

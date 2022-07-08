import { BaseTemplateProps } from './index';
import { data } from '../../services/data-mock.json';

export default {
  settings: data.setting,
  children: 'Olá mundo!',
} as BaseTemplateProps;

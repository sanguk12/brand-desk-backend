import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  FILE = 'file',
  IMAGE = 'image',
  VIDEO = 'video',
  PASSWORD = 'password',
  EDITOR = 'editor',
  TEXTAREA = 'textarea',
  DATE = 'date',
  DATETIME = 'datetime',
  BOOLEAN = 'boolean',
  // USER = 'user',
  // CONTENT = 'content',
  // CATEGORY = 'category',
  DICTIONARY = 'dictionary',
}

export const InputTypeTextMap: Map<InputTypeEnum, string> = (() => {
  const map = new Map<InputTypeEnum, string>();
  map.set(InputTypeEnum.TEXT, t('common.inputType.' + InputTypeEnum.TEXT));
  map.set(InputTypeEnum.NUMBER, t('common.inputType.' + InputTypeEnum.NUMBER));
  map.set(InputTypeEnum.FILE, t('common.inputType.' + InputTypeEnum.FILE));
  map.set(InputTypeEnum.IMAGE, t('common.inputType.' + InputTypeEnum.IMAGE));
  map.set(InputTypeEnum.VIDEO, t('common.inputType.' + InputTypeEnum.VIDEO));
  map.set(InputTypeEnum.PASSWORD, t('common.inputType.' + InputTypeEnum.PASSWORD));
  map.set(InputTypeEnum.EDITOR, t('common.inputType.' + InputTypeEnum.EDITOR));
  map.set(InputTypeEnum.TEXTAREA, t('common.inputType.' + InputTypeEnum.TEXTAREA));
  map.set(InputTypeEnum.DATE, t('common.inputType.' + InputTypeEnum.DATE));
  map.set(InputTypeEnum.DATETIME, t('common.inputType.' + InputTypeEnum.DATETIME));
  map.set(InputTypeEnum.BOOLEAN, t('common.inputType.' + InputTypeEnum.BOOLEAN));
  map.set(InputTypeEnum.DICTIONARY, t('common.inputType.' + InputTypeEnum.DICTIONARY));

  return map;
})();

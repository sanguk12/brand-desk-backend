import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export enum ModuleTypeEnum {
  MENU = 1,
  ACTION = 2,
}

export const moduleTypeTextMap: Map<ModuleTypeEnum, string> = (() => {
  const map = new Map<ModuleTypeEnum, string>();
  map.set(ModuleTypeEnum.MENU, t('common.module.menu'));
  map.set(ModuleTypeEnum.ACTION, t('common.module.action'));

  return map;
})();

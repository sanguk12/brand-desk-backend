import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export enum ContentStatusEnum {
  DRAFT = 0,
  NORMAL = 1,
  PEND = 2,
  REJECT = 3,
}

export const contentStatusTextMap: Map<ContentStatusEnum, string> = (() => {
  const map = new Map<ContentStatusEnum, string>();
  map.set(ContentStatusEnum.DRAFT, t('common.contentStatus.draft'));
  map.set(ContentStatusEnum.NORMAL, t('common.contentStatus.normal'));
  map.set(ContentStatusEnum.PEND, t('common.contentStatus.pend'));
  map.set(ContentStatusEnum.REJECT, t('common.contentStatus.reject'));
  return map;
})();

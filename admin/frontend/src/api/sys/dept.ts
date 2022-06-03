import {
  CategorySearchParams,
  DeptCateParams,
  DeptListGetResultModel,
  DeptParams,
} from './model/model';
import { defHttp } from '/@/utils/http/axios';
import { CategoryListItem } from '/@/api/cms/model/category';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  DeptList = '/api/sysDept/list',
  DeptTree = '/api/sysDept/tree',
  DeptSave = '/api/sysDept/save',
  DeptDelete = '/api/sysDept/delete',
  CategoryList = '/api/sysDept/categoryList',
  SaveCategory = '/api/sysDept/saveCategory',
  SaveOwnAllCategory = '/api/sysDept/saveOwnAllCategory',
}

export const getDeptList = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getDeptTree = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptTree, params });

export async function saveDept(dept: DeptParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.DeptSave, data: dept, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function deleteDept(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.DeptDelete, params: { id, _csrf } });
}

export const getDeptCateList = (params: CategorySearchParams) =>
  defHttp.get<CategoryListItem[]>({ url: Api.CategoryList, params });

export const saveDeptCate = async (deptId: number, cateList: DeptCateParams[]) => {
  const _csrf = await getCsrf();
  defHttp.post<number[]>({ url: Api.SaveCategory, data: { deptId, cateList }, params: { _csrf } });
};

export const saveOwnAllCategory = async (deptId: number, ownsAllCategory: boolean) => {
  const _csrf = await getCsrf();
  defHttp.post<number[]>({
    url: Api.SaveOwnAllCategory,
    params: { deptId, ownsAllCategory, _csrf },
  });
};

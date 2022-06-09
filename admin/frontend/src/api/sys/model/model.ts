import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type UserSearchParams = BasicPageParams & {
  name?: string;
  isAdmin?: boolean;
};

export type ModuleSearchParams = BasicPageParams & {
  id?: string;
  roleId?: number;
  status?: number;
  type?: number;
};

export type CategorySearchParams = BasicPageParams & {
  cateId?: number | null;
  deptId?: number | null;
  parentCate?: boolean | null;
};

export type UserParams = BasicPageParams & {
  id?: number;
  username?: string;
  password?: string;
  nickname?: string;
  deptId?: number;
  ownsAllContent: boolean;
  roles?: number[] | string;
  email?: string;
  isAdmin: boolean;
  disabled: boolean;
  locked: boolean;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type DeptParams = {
  id?: number;
  name?: string;
  status?: string;
};

export type DeptCateParams = {
  id?: number;
  selected?: boolean;
  containChild?: boolean;
};

export type RoleModuleParams = {
  id?: number;
  selected?: boolean;
  containChild?: boolean;
};

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface UserListItem {
  id: number;
  username: string;
  email: string;
  nickname: string;
  role: number;
  registeredDate: string;
  disabled: boolean;
  locked: boolean;
}

export interface DeptListItem {
  id: number;
  name: string;
  parentId: number;
  description: string;
  userId: number;
  maxSort: number;
  ownsAllCategory: boolean;
  ownsAllPage: boolean;
  ownsAllConfig: boolean;
  createDate: Date;
  updateDate: Date;
  status: number;

  children: DeptListItem[];
}

export interface ModuleListItem {
  id: string;
  type: number;
  url: string;
  authorizedUrl: string;
  icon: string;
  parentId: string;
  menu: boolean;
  status: number;
  sort: number;

  koName: string;
  enName: string;

  children: ModuleListItem[];
}

export interface RoleListItem {
  id: number;
  name: string;
  description: string;
}

/**
 * @description: Request list return value
 */
export type UserListGetResultModel = BasicFetchResult<UserListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type ModuleListGetResultModel = BasicFetchResult<ModuleListItem>;

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];

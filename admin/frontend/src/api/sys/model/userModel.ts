/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  id: number;
  name: string;
  ownsAllRight: boolean;
  showAllModule: boolean;
  description: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  userId: number;
  username: string;
  nickname: string;
  deptId: number;
  deptName: string;
  homePath: string;
  ownsAllContent: boolean;
  roles: RoleInfo[];
  email: string;
  emailVerified: boolean;
  admin: boolean;
  disabled: boolean;
  locked: boolean;
  lastLoginDate: Date;
  lastLoginIp: string;
  loginCount: number;
  createDate: Date;

  // Avatar
  avatar: string;
  // introduce
  desc?: string;
}

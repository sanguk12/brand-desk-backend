export interface ExtendFieldItem {
  uuid?: string;
  extendId?: number;
  code?: string;
  required?: boolean;
  searchable?: boolean;
  maxlength?: number;
  name?: string;
  description?: string;
  inputType?: string;
  defaultValue?: string;

  dictionaryId?: string;
  sort?: number;
}

export interface ExtendItem {
  id?: number;
  itemType?: string;
  itemId?: string;
  fieldList: ExtendFieldItem[];
}

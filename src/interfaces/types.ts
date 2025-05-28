export interface RegisterFormData {
  username: string;
  password: string;
  //email: string;
}

export interface LoginFormData {
  password: string;
  username: string;
}

export interface AddListData {
  listname: string;
}

export interface AddItemFormData {
  itemName: string;
}

export interface AddItemToForm {
  userID: number;
  shoppingListId: number;
  ShoppingListName: string;
  itemName: string;
  currentListData: [string];
}

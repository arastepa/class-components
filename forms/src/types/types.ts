export interface formData {
  name: string;
  age: number | string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept?: boolean;
  picture: string;
  country: string;
}

export interface HookFormData {
  name: string;
  age: number | string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept?: boolean;
  picture: FileList;
  country: string;
}

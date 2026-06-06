export interface ISuccessResponse<T = unknown> {
  success: true;
  data: T;
}
export interface IErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type IApiResponse<T = unknown> = ISuccessResponse<T> | IErrorResponse;

export interface ResponseSuccessType<T> {
  data: T | null;
  status: number;
}

export type ResponseFailType = Record<"code" | "message" | "details", string>;

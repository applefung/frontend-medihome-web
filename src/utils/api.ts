import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { setLoading } from "../store/actions/loading";
// import { openModal } from "../store/actions/modal";
// import { useAppDispatch } from "../store/hook";
import { ResponseFailType, ResponseSuccessType } from '../types/common';

type InferResponseDataType<T> = T extends Promise<ResponseSuccessType<infer U>> ? U : unknown;

export const formatApiResponse = ({ data, status }: AxiosResponse<unknown>) => ({
  data,
  status: Number(status >= 200 && status < 300),
});

// TODO: Type definition
export const useApiRequest = <T extends (...args: any) => Promise<ResponseSuccessType<unknown>>>(targetApiRequest: T, onError?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submit = useCallback(
    async (...args: Parameters<T>) => {
      setIsLoading(false);
      try {
        const resp = (await targetApiRequest(...args)) as ResponseSuccessType<InferResponseDataType<ReturnType<T>>>;
        return { error: null, ...resp };
      } catch (e: unknown) {
        onError ? onError() : alert('I hv error1');
        setError(e as Error);
      } finally {
        setIsLoading(true);
      }
    },
    [targetApiRequest, onError],
  );

  return {
    submit,
  };
};

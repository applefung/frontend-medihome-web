import { AxiosResponse } from "axios";
import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { setLoading } from "../store/actions/loading";
// import { openModal } from "../store/actions/modal";
// import { useAppDispatch } from "../store/hook";
import { ResponseFailType, ResponseSuccessType } from "../types/common";

type InferResponseDataType<T> = T extends Promise<ResponseSuccessType<infer U>>
  ? U
  : unknown;

export const formatApiResponse = ({
  data,
  status,
}: AxiosResponse<unknown>) => ({
  data,
  status: Number(status >= 200 && status < 300),
});

export const useApiRequest = <
  T extends (...args: any) => Promise<ResponseSuccessType<unknown>>
>(
  targetApiRequest: T
) => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const submit = useCallback(
    async (...args: Parameters<T>) => {
      //   dispatch(setLoading(true));
      try {
        const resp = (await targetApiRequest(...args)) as ResponseSuccessType<
          InferResponseDataType<ReturnType<T>>
        >;
        return { error: null, ...resp };
      } catch (e: unknown) {
        //   dispatch(openModal({title: 'Error', description: (e as AxiosResponse<ResponseFailType>).data.message, handleConfirm:()=>navigate('/'), isTextFieldShow: false}));
      } finally {
        //   dispatch(setLoading(false))
      }
    },
    [targetApiRequest]
  );

  return {
    submit,
  };
};

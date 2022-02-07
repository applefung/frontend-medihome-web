import { CarouselType } from "@src/types/carouse";
import { ResponseSuccessType } from "@src/types/common";
import requestService from "./request";

const getCarousels = () => {
  const url = "/carousels";
  return requestService.get<
    CarouselType[],
    ResponseSuccessType<CarouselType[]>
  >(url);
};

export { getCarousels };

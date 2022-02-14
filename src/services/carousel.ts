import { CarouselType } from '@src/types/carousel';
import { ResponseSuccessType } from '@src/types/common';
import requestService from './request';

const getCarousels = () => requestService.get<CarouselType[], ResponseSuccessType<CarouselType[]>>('/carousels');

export { getCarousels };

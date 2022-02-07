import { DatabaseDates } from "./common";

export type CarouselType = Record<"id" | "url", string> & DatabaseDates;

export type CarouselBanners = Record<"url", string>[];

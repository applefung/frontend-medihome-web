// export const imageLoader = (src: string) => {
//     return `/base-path/${src}`;
//   };

export const imageLoader = ({ src }: Record<'src', string>) => src;

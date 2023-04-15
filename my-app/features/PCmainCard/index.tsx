import { FC } from "react";

type Props = {
  children: React.ReactNode;
  h?: string;
  w: string;
  pt: string;
  pb: string;
};

export const PCmainCard: FC<Props> = ({ children, w, h, pt, pb }) => {
  const style = {
    width: w + "px",
    height: h + "px",
    paddingTop: pt + "px",
    paddingBottom: pb + "px",
  };

  return (
    <>
      <div className="PCcard-shadow rounded-[32px]" style={style}>
        {children}
      </div>
    </>
  );
};

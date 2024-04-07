import { Fragment } from "react/jsx-runtime";

interface Inputpropes {
  svgpath: string;
  title: string;
  description: string;
  id: number;
  viweBox: string;
}

function Card({ svgpath, title, description, id, viweBox }: Inputpropes) {
  return (
    <Fragment key={id}>
      <div className="p-6 h-[180px] border-[1px] border-slate-600 rounded-lg flex flex-col justify-between">
        <svg viewBox={viweBox} className="h-12 w-12 fill-current">
          <path fillRule="evenodd" d={svgpath}></path>
        </svg>
        <h1 className=" text-[1rem] font-[700] mt-2">{title}</h1>
        <p className="text-slate-400 text-base text-clip">{description}</p>
      </div>
    </Fragment>
  );
}

export default Card;

import { Mail, Trash2 } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export default function EmailCard({ data }: { data: { email: string }[] }) {
  return (
    <div>
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className=" w-full bg-zinc-700 rounded-md border-l-4  border-green-700 p-3 m-3">
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <Mail />
                </div>
                <div className=" text-slate-50 font-mono">{item.email}</div>
              </div>
              <div className=" flex ">
                <div className=" text-red-800 cursor-pointer">
                  <Trash2 />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

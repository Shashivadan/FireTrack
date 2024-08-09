import { Mail, Trash2 } from "lucide-react";

export default function EmailCard({ data }: { data: string[] }) {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index + "ed"}
          className="w-full bg-zinc-700 rounded-md border-l-4 border-green-700 p-3 m-3"
        >
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4">
              <div>
                <Mail />
              </div>
              <div className="text-slate-50 font-mono">{item}</div>
            </div>
            <div className="flex">
              <div className="text-red-800 cursor-pointer">
                <Trash2 />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import EmailCard from "@/components/EmailCard";
import { MailModel } from "@/components/MailModel";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
// import motion from "framer-motion";

const data = [
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
  { email: "shashivadan99@gmail.com" },
];

export default function SetEmails() {
  return (
    <>
      <div className=" w-full h-screen">
        <div className=" text-3xl font-serif mb-10 text-center mt-10">
          Give mail who you what to alert about fire
        </div>
        <div className=" w-1/2 m-auto">
          <Card className="  bg-slate-900 border-none p-5 text-white">
            <CardTitle className=" mb-5 flex items-center justify-between">
              <div className=" text-lg">Emails</div>
              <MailModel />
            </CardTitle>
            <CardContent>
              <EmailCard data={data} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

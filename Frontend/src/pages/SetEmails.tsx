import EmailCard from "@/components/EmailCard";
import { MailModel } from "@/components/MailModel";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Instance from "@/utils/AxiosBaseUrl";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface axosType {
  data: ResType;
}

interface ResType {
  userId: string;
  emails: string[];
}

export default function SetEmails() {
  const [data, setData] = useState<ResType | null>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Instance.get<axosType>("/api/v1/getmails");
        const result = res.data.data;
        setData(result);
        setError(false);
      } catch (error) {
        if (isAxiosError(error)) {
          setError(true);
        }
        setError(true);
      }
    }
    if (!data) {
      fetchData();
      return;
    }
    fetchData();
  }, []);

  return (
    <>
      <div className=" w-full h-screen">
        <div className=" text-3xl font-serif mb-10 text-center mt-10">
          Give mail who you what to alert about fire
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-1/2 m-auto"
        >
          <Card className="  bg-slate-900 border-none p-5 text-white">
            <CardTitle className=" mb-5 flex items-center justify-between">
              <div className="text-lg">Emails</div>
              <MailModel />
            </CardTitle>
            <CardContent>
              {data && <EmailCard data={data?.emails} />}
              {error && (
                <>
                  <p className=" text-sm text-red-800">Sorry Error Occured</p>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}

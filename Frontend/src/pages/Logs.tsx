import Nav from "@/components/Nav";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "@/utils/AxiosBaseUrl";
import { isAxiosError } from "axios";
// temperature: record.temperature,
// oxygen: record.oxygen,
// humidity: record.humidity,
// danger: record.danger,
// probability: record.probability,
// createdAt: record.createdAt,

type DataType = {
  _id: string;
  temperature: number;
  oxygen: number;
  humidity: number;
  danger: boolean;
  probability: number;
  createdAt: string;
};

function Logs() {
  const [data, setData] = useState<DataType[] | null>(null);

  useEffect(() => {
    async function logData() {
      try {
        const res = await axios.post("api/v1/records");
        const resData = await res.data.records;
        setData(resData);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          console.log(error);
        }
        console.log(error);
      }
    }
    if (!data) {
      logData();
    }
  }, []);
  return (
    <>
      <div className="w-full md:max-w-screen-xl m-auto px-3 md:px-2">
        <Nav />
        <div className=" min-h-[calc(100vh-60px)] max-h-fit p-6">
          <div className="flex justify-center items-center">
            <Table>
              <TableCaption>A list of your recent logs.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Temperature</TableHead>
                  <TableHead>Oxygen</TableHead>
                  <TableHead>Humidity</TableHead>
                  <TableHead>Danger</TableHead>
                  <TableHead>Probability</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data ? (
                  data.map((item: DataType) => {
                    return (
                      <TableRow key={item._id} className="">
                        <TableCell className="font-medium">
                          {item.temperature}
                        </TableCell>
                        <TableCell>{item.oxygen}</TableCell>
                        <TableCell>{item.humidity}</TableCell>
                        <TableCell>
                          {item.danger ? (
                            <div className=" bg-red-500  text-center px-2  rounded-full font-bold">
                              Danger
                            </div>
                          ) : (
                            <div className=" bg-green-500  text-center px-2  rounded-full font-bold">
                              Safe
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{item.probability}</TableCell>
                        <TableCell>{item.createdAt.slice(0, 10)}</TableCell>
                        <TableCell>{item.createdAt.slice(11, 18)}</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell>Empty</TableCell>
                    <TableCell>Empty</TableCell>
                    <TableCell>Empty</TableCell>
                    <TableCell>Empty</TableCell>
                    <TableCell>Empty</TableCell>
                    <TableCell>Empty</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logs;

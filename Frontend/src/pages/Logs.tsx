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
  const [data, setData] = useState<DataType[] | null>();

  useEffect(() => {
    async function logData() {
      const res = await axios.post("api/v1/records");
      const resData = await res.data;
      console.log(resData);

      try {
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          console.log(error);
        }
        console.log(error);
      }
    }
    logData();
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
                  <TableHead>temperature</TableHead>
                  <TableHead>oxygen</TableHead>
                  <TableHead>humidity</TableHead>
                  <TableHead>danger</TableHead>
                  <TableHead>probability</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>$250.00</TableCell>
                  <TableCell>$250.00</TableCell>
                  <TableCell>$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logs;

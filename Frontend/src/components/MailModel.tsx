import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Fragment, useState } from "react";

export function MailModel() {
  const [addEmails, setAddEmails] = useState<number>(1);
  console.log(addEmails);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-slate-800 border-none hover:bg-slate-600 hover:text-white"
          variant="outline"
        >
          {" "}
          <Plus />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-slate-800  border-none  text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className=" flex items-center justify-between">
            <div>Add emails</div>
            <div
              onClick={() => {
                if (addEmails > 5) return;
                setAddEmails(addEmails + 1);
              }}
              className=" bg-slate-900 p-2 rounded-md"
            >
              <Plus />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className=" flex flex-col gap-2">
            {[...Array(addEmails)].map((item) => (
              <Fragment key={item}>
                <Input
                  className=" border-none text-white bg-slate-700 placeholder:text-slate-300 placeholder:font-semibold"
                  placeholder="email@zyx.con"
                />
              </Fragment>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setAddEmails(1);
            }}
            className=" bg-slate-900 border-none hover:bg-slate-950 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction>Submint</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

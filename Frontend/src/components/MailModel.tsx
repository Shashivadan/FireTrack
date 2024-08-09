import { useState } from "react";
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

export function MailModel() {
  const [emails, setEmails] = useState([""]);

  const addEmailField = () => {
    if (emails.length < 5) {
      setEmails([...emails, ""]);
    }
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Submitted emails:", emails);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-slate-800 border-none hover:bg-slate-600 hover:text-white"
          variant="outline"
        >
          <Plus className="cursor-pointer" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-slate-800 border-none text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-between">
            <div>Add emails</div>
            <div
              onClick={addEmailField}
              className="bg-slate-900 p-2 rounded-md cursor-pointer"
            >
              <Plus />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2">
            {emails.map((email, index) => (
              <Input
                key={index}
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                className="border-none text-white bg-slate-700 placeholder:text-slate-300 placeholder:font-semibold"
                placeholder="email@xyz.com"
              />
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setEmails([""])}
            className="bg-slate-900 border-none hover:bg-slate-950 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

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
import { toast } from "sonner";
import { isAxiosError } from "axios";
import Instance from "@/utils/AxiosBaseUrl";

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

  function emailValidtion(emails: string[]) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmails = emails.filter((email) => emailRegex.test(email));
    if (validEmails.length !== emails.length) {
      toast.warning(
        `${
          emails.length - validEmails.length
        } valid email(s) found. Invalid emails were removed.`
      );
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    const isVaildEmails = emailValidtion(emails);
    if (!isVaildEmails) return;
    try {
      const res = await Instance.post("/api/v1/createemails", { emails });
      const result = await res.data;
      if (result) {
        toast.success("Your Emails Are Saved");
      }
    } catch (error) {
      console.log(error);

      if (isAxiosError(error)) {
        toast.warning("some thing went worng");
        return;
      }
      toast.error("Internal Server Error");
    }
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
                onChange={(e) =>
                  handleEmailChange(index, e.target.value.trim())
                }
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

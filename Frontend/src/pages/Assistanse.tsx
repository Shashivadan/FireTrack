import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/utils/AxiosBaseUrl";
import { useState } from "react";

function Assistanse() {
  // const history: ChatType[] = [
  //   {
  //     role: "user",
  //     parts: [{ text: "Hello, I have 2 dogs in my house." }],
  //   },
  //   {
  //     role: "model",
  //     parts: [{ text: "Great to meet you. What would you like to know?" }],
  //   },
  // ];
  const [chat, setChat] = useState<string | []>("");
  const [userInput, setuserInput] = useState<string | undefined>("");

  const onClickHandler = async () => {
    setChat("");
    try {
      const res = await axios.post("api/v1/gemini", {
        prompt: userInput,
      });
      const resdata = await res.data.text;
      setuserInput("");
      setChat(resdata);
    } catch (error) {
      console.log(error);
      setChat("some thing went wrong");
    }
  };

  return (
    <>
      <div className="w-full md:min-w-screen-xl m-auto px-3 md:px-2">
        <Nav />
        <div className=" min-h-[calc(100vh-60px)] p-6">
          <div className=" min-h-[85vh] flex flex-col justify-end w-full bg-slate-800 rounded-2xl p-3">
            <div className="h-fit min-h-[90%]  w-full  p-6">
              <div className=" font-semibold bg-slate-600 p-2 rounded-lg ">
                model : {chat ? chat : "loading"}
              </div>
            </div>
            <div className=" h-[10%] flex justify-center gap-2 items-center mx-2 md:px-2">
              <Input
                onChange={(e) => setuserInput(e.target.value)}
                placeholder="Ask me something"
                type="text"
                className="py-6 border-slate-500 border-none bg-slate-700 rounded-2xl text-xl leading-normal"
              />
              <Button
                onClick={onClickHandler}
                className="py-6 rounded-2xl font-bold"
              >
                submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assistanse;

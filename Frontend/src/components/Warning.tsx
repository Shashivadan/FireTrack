interface PropType {
  status: string;
  probability: number;
  value: boolean;
}

function Warning({ status, probability, value }: PropType) {
  return (
    <>
      <div
        className={` ${
          value ? "bg-red-900" : "bg-green-900"
        } px-3 py-2 rounded-lg`}
      >
        <h1 className=" text-xl font-[700]">{probability}</h1>
        <p className=" mt-3 text-[1.1rem]">{status}</p>
        <h3 className=" mt-2">{value}</h3>
      </div>
    </>
  );
}

export default Warning;

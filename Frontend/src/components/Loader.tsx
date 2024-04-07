import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center bg-transparent">
        <DNA
          visible={true}
          height="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  );
}

export default Loader;

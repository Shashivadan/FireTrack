import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div className=" w-full h-screen grid items-center bg-blue-950">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  );
}

export default Loader;

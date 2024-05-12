import { useForm } from "react-hook-form";
import useFlightStore from "../../Zustand/Store";

const SearchComp = () => {
  const { setStatus } = useFlightStore();
  const {
    register,
    handleSubmit,

    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setStatus(true);
    }
  };
  return (
    <div className="mx-5 mt-2">
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-wrap items-center gap-2">
          <input
            value="LHR"
            {...register("lhr")}
            className="w-full  max-w-40 border  border-gray-400 px-2 py-2 text-left font-medium text-gray-600 focus:border-gray-400 focus:outline-none focus:placeholder:text-gray-400"
          />
          <input
            value="CDG"
            {...register("cdg")}
            className="w-full  max-w-40 border  border-gray-400 px-2 py-2 text-left font-medium text-gray-600 focus:border-gray-400 focus:outline-none focus:placeholder:text-gray-400"
          />
          <input
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("date")}
            className="w-full  max-w-40 border  border-gray-400 px-5 py-2 text-center font-medium focus:border-gray-400 focus:outline-none focus:placeholder:text-gray-400"
          />
          <select name="day" id="day">
            <option value="day">Day -</option>
            <option value="night">Night</option>
          </select>
          <select name="day" id="day">
            <option value="day">Day +</option>
            <option value="night">Night</option>
          </select>
          <select name="anytime" id="day" className="w-full max-w-60 ">
            <option value="day">Any Time </option>
          </select>
          <div>+</div>
          <select name="adt" id="adt" className="w-full max-w-28">
            <option value="ADT">ADT</option>
          </select>
          <select name="number" id="number" className="w-full max-w-28">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p>+</p>
        </div>
        <hr className="mb-4 mt-5  h-0.5 bg-blue-300" />
        <div className="my-2 flex flex-wrap items-center justify-between gap-5">
          <div className="mx-auto w-1/2 sm:mx-0 sm:w-fit">
            <label htmlFor="extra-option" className="flex items-center gap-2 ">
              <input
                type="checkbox"
                name="extra-option"
                id="extra-option"
                className="form-checkbox"
              />
              <span className="ml-2 text-xl ">Extra Option</span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-xl"> Environment</h2>
            <label htmlFor="dummy" className="flex items-center gap-2">
              <input type="radio" name="dummy" id="dummy" checked />
              <span className="mr-2 text-xl">Dummy</span>
            </label>
            <label htmlFor="PDT" className="flex items-center gap-2">
              <input type="radio" name="dummy" id="dummy" />
              <span className="mr-2 text-xl">PDT</span>
            </label>
          </div>
          <div className="mx-auto  w-1/2 sm:mx-0 sm:w-fit">
            <button
              className="rounded-md bg-[#2E3791] px-5 py-2 capitalize text-white drop-shadow-sm"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <hr className="mt-5 h-0.5 bg-blue-300" />
      </form>
    </div>
  );
};

export default SearchComp;

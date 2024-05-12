import { useForm } from "react-hook-form";

const SearchComp = () => {
  const {
    register,
    handleSubmit,

    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-2">
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
        <hr className="mt-3 h-0.5 bg-blue-300" />
      </form>
    </div>
  );
};

export default SearchComp;

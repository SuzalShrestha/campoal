import values from "./data/values";
function Value({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="flex flex-col justify-center gap-10 px-20">
      <h1 className="font-circularstd text-7xl">{`0${index + 1}`}</h1>
      <div className="flex flex-col justify-center gap-2 text-left">
        <h2 className="font-circularstdblack text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
function Values() {
  return (
    <div className="bg-wave text-card-primary grid w-full grid-cols-1 grid-rows-2 px-20 py-60">
      <div className="flex items-center px-20">
        <h1 className="font-circularstdblack text-6xl">Our values</h1>
      </div>
      <div className="grid grid-cols-3">
        {values.map((value, index) => (
          <Value key={index} index={index} {...value} />
        ))}
      </div>
    </div>
  );
}
export default Values;

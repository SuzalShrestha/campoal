import numbers from "./data/numbers";
function Numbers() {
  return (
    <div className="grid h-[200px] w-full grid-cols-3 grid-rows-1 items-center justify-center gap-20 bg-card-primary font-circularstdnormal text-xl text-white">
      {numbers.map((number, index) => (
        <Number key={index} {...number} />
      ))}
    </div>
  );
}
function Number({ number, title }: { number: number; title: string }) {
  const commaNumber = number.toLocaleString();
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-circularstd text-6xl">{commaNumber}</h1>
      <p>{title}</p>
    </div>
  );
}
export default Numbers;

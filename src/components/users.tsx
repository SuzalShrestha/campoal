import CardCustom from "./ui/card-custom";
import cardDetails from "./data/carddetails";
function Cards() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-7 px-20">
      {cardDetails.map((card, index) => (
        <CardCustom key={index} {...card} />
      ))}
    </div>
  );
}
function Users() {
  return (
    <div className="px-30 grid grid-cols-2 bg-[#FFFCF7] py-40">
      <div className="flex flex-col gap-10 px-20">
        <p className="font-circularstd-normal px-20 text-left text-2xl text-slate-500">
          Who use Platform?
        </p>
        <p className="font-circularstdblack px-20 text-left text-5xl font-extrabold leading-tight text-slate-700">
          We believe that when everyone speaks out the problem of society and
          action together, the world will become a better place.
        </p>
      </div>
      <Cards />
    </div>
  );
}
export default Users;

export const Button = ({ text }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center w-[150px] p-4 text-white bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button className="cursor-pointer">{text}</button>
    </div>
  );
};

export const Button = ({ text, onClick }) => {
  return (
    <div 
      className="cursor-pointer flex flex-col items-center w-[150px] p-4 text-white bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      <button className="cursor-pointer w-full">{text}</button>
    </div>
  );
};

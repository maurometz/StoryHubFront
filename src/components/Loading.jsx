export const LoadingSpinner = () => {
  return (
    <div className="w-[100vw] h-[100vw] bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-999">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="50"
          height="50"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="188.4"
            strokeDashoffset="0"
            style={{
              animation: "spin 2.5s linear infinite",
              transformOrigin: "center",
            }}
          />
          <style>
            {`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }  
                to {
                  transform: rotate(360deg);
                }
              @keyframes dash {
                0% {
                  stroke-dasharray: 1, 200;
                  stroke-dashoffset: 0;
                }
                50% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -35;
                100% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -124;
                }
              }
            `}
          </style>
        </svg>
      </div>
    </div>
  );
};

export const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
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
            // animation: "dash 1.5s ease-in-out infinite",
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
  );
};

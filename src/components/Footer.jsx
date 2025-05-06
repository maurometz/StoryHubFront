export const Footer = () => {
  return (
    <footer className="bg-blue-darkly text-white py-10 px-4 flex flex-col items-center">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start mb-10 border-b-1 border-gray pb-10">
        <div>
          <h4 className="font-bold text-[20px] mb-4">StoryHub</h4>
          <p className="text-[15px] text-gray-lightly mb-2">
            Where stories come to life
          </p>
        </div>
        <div>
          <h4 className="font-medium text-[15px] mb-4">Navigation</h4>
          <ul>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Home</p>
            </li>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Writers</p>
            </li>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Stories</p>
            </li>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Categories</p>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-[15px] mb-4">Legal</h4>
          <ul>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Terms</p>
            </li>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Privacy</p>
            </li>
            <li>
              <p className="text-[15px] text-gray-lightly mb-2">Guidelines</p>
            </li>
          </ul>
        </div>
        <div className="mr-[10em]">
          <h4 className="font-medium text-[15px] mb-4">Follow Us</h4>
          <p className="flex flex-row gap-2">
            <span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="22px"
                  height="22px"
                  fill="currentColor"
                  className="text-white hover:text-blue transition duration-300 ease-in-out"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z"></path>
                  </g>
                </svg>
              </a>
            </span>
            <span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  className="text-white hover:text-blue-lightly transition duration-300 ease-in-out"
                >
                  {" "}
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
            </span>
            <span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="22px"
                  height="22px"
                  fill="currentColor"
                  className="text-white hover:text-purple transition duration-300 ease-in-out"
                  fill-rule="nonzero"
                >
                  <g transform="scale(8,8)">
                    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                  </g>
                </svg>
              </a>
            </span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-lightly">
          &copy; 2025 StoryHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

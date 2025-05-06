import { Link } from "react-router-dom";

const links = [
  { name: "Home", pathname: "/" },
  { name: "Writers", pathname: "/writers" },
  { name: "Stories", pathname: "/stories" },
  { name: "Categories", pathname: "/categories" },
];

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center pt-5 pb-5 pl-8 pr-8 border-b-1 bg-white border-b-gray-300">
      <h1 className="font-bold text-[20px]">StoryHub</h1>
      <nav>
        <ul className="flex flex-row gap-5 text-[16px]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.pathname}
                className="cursor-default transition-all duration-160 hover:font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row gap-5">
        <span className="relative">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"
              fill="#0F0F0F"
            />
          </svg>
          {/* <div className="bg-blue-light rounded-full w-[.75em] h-[.75em] absolute top-[-5px] right-[-5px] text-center z-10">
            <p className="text-white text-[8px] font-bold">1</p>
          </div> */}
        </span>
        <span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 20.00 20.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            stroke="#000000"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.04"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>profile_round [#000000]</title>{" "}
              <desc>Created with Sketch.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke-width="0.0002"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -2159.000000)"
                  fill="#000000"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                      id="profile_round-[#000000]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </span>
      </div>
    </header>
  );
};

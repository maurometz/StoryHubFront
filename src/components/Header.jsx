import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", pathname: "/" },
  { name: "Writers", pathname: "#" },
  { name: "Stories", pathname: "/stories" },
  { name: "Categories", pathname: "#" },
];

export const Header = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <header className="w-full flex justify-between items-center pt-5 pb-5 pl-8 pr-8 border-b-1 bg-white border-b-gray-300 fixed top-0 left-0 z-50">
      <h1 className="font-bold text-[20px]">StoryHub</h1>
      <nav>
        <ul className="flex flex-row gap-5 text-[16px]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.pathname}
                className="cursor-pointer transition-all duration-160 hover:font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row gap-5">
        <span
          className="relative cursor-pointer"
          onClick={() => setIsBookmarked((prev) => !prev)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition:
              "transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.22s",
            transform: isHovered ? "scale(1.10) rotate(-2deg)" : "scale(1)",
            boxShadow: isHovered
              ? "0 6px 24px 0 rgba(250, 204, 21, 0.18), 0 2px 0 #fff inset"
              : "0 2px 8px 0 rgba(0,0,0,0.10)",
            filter: isHovered
              ? "drop-shadow(0 2px 12px #fde68a)"
              : isBookmarked
              ? "drop-shadow(0 2px 8px #fde68a)"
              : "none",
            background: isHovered
              ? "linear-gradient(135deg, #fffbe6 80%, #fef9c3 100%)"
              : "none",
            borderRadius: 12,
            padding: 2,
          }}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            style={{
              filter: isBookmarked
                ? "drop-shadow(0 2px 8px #fde68a)"
                : "drop-shadow(0 1px 2px #e5e7eb)",
              transition: "filter 0.2s",
              borderRadius: 8,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="bookmark-bg-soft" cx="50%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#fffde4" />
                <stop offset="100%" stopColor="#fef9c3" />
              </radialGradient>
              <linearGradient
                id="bookmark-edge-soft"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
              <radialGradient id="bookmark-glow" cx="50%" cy="80%" r="80%">
                <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g>
              {/* Soft shadow/glow */}
              {isHovered && (
                <ellipse
                  cx="16"
                  cy="28"
                  rx="10"
                  ry="3"
                  fill="url(#bookmark-glow)"
                  opacity="0.6"
                />
              )}
              {/* Main bookmark shape */}
              <path
                d="M7 5c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v22.5c0 1.3-1.5 2.1-2.6 1.3L16 23.2l-6.4 5.6C8.5 29.6 7 28.8 7 27.5V5z"
                fill={
                  isBookmarked || isHovered ? "url(#bookmark-bg-soft)" : "#fff"
                }
                stroke="url(#bookmark-edge-soft)"
                strokeWidth="1.2"
                style={{
                  filter:
                    isBookmarked || isHovered
                      ? "drop-shadow(0 2px 12px #fde68a)"
                      : "drop-shadow(0 1px 2px #e5e7eb)",
                  transition: "filter 0.2s",
                }}
              />
              {/* Soft edge */}
              <path
                d="M16 23.2l-6.4 5.6C8.5 29.6 7 28.8 7 27.5V5c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v22.5c0 1.3-1.5 2.1-2.6 1.3L16 23.2z"
                fill="none"
                stroke="#fde68a"
                strokeWidth="0.7"
                opacity="0.5"
              />
              {/* Skeuomorphic shadow */}
              <ellipse
                cx="16"
                cy="29.5"
                rx="7"
                ry="1.5"
                fill="#fde68a"
                opacity={isBookmarked || isHovered ? "0.18" : "0.10"}
              />
              {/* Shine */}
              <path
                d="M10 6.5c0.5-1 2-1.5 6-1.5s5.5 0.5 6 1.5"
                stroke="#fff"
                strokeWidth="0.8"
                opacity="0.5"
                strokeLinecap="round"
              />
              {/* Soft fill when bookmarked */}
              {isBookmarked && (
                <path
                  d="M16 23.2l-6.4 5.6C8.5 29.6 7 28.8 7 27.5V5c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v22.5c0 1.3-1.5 2.1-2.6 1.3L16 23.2z"
                  fill="#fde68a"
                  fillOpacity="0.7"
                  style={{
                    filter: "blur(0.5px)",
                  }}
                />
              )}
            </g>
          </svg>
          {/* Paper curl effect */}
          <span
            style={{
              position: "absolute",
              right: 2,
              bottom: 2,
              width: 10,
              height: 10,
              borderBottomRightRadius: 8,
              background: "linear-gradient(135deg, #fffbe6 60%, #fde68a 100%)",
              boxShadow: isHovered ? "0 2px 8px #fde68a" : "0 1px 2px #fde68a",
              opacity: isHovered ? 0.85 : 0.5,
              pointerEvents: "none",
              transition: "opacity 0.2s",
              zIndex: 1,
            }}
          />
        </span>
        <span
          className="relative cursor-pointer"
          tabIndex={0}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setPressed(false);
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            padding: 2,
            background: hovered
              ? "linear-gradient(135deg, #e0f2fe 80%, #bae6fd 100%)"
              : "linear-gradient(135deg, #f0f9ff 80%, #e0f2fe 100%)",
            boxShadow: pressed
              ? "0 2px 8px #60a5fa, 0 1px 2px #3b82f6"
              : hovered
              ? "0 4px 16px #60a5fa, 0 2px 4px #3b82f6"
              : "0 1px 4px #60a5fa22, 0 1px 2px #3b82f622",
            transform: pressed
              ? "scale(0.95)"
              : hovered
              ? "scale(1.08)"
              : "scale(1)",
            transition:
              "background 0.18s, box-shadow 0.18s, transform 0.12s cubic-bezier(.4,2,.6,1)",
          }}
          aria-label="User profile"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            style={{
              display: "block",
              filter:
                hovered || pressed
                  ? "drop-shadow(0 2px 12px #60a5fa88)"
                  : "drop-shadow(0 1px 2px #bae6fd)",
              transition: "filter 0.18s",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="user-bg" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
              <linearGradient id="user-edge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <radialGradient id="user-glow" cx="50%" cy="80%" r="80%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g>
              {/* Soft shadow/glow */}
              {hovered && (
                <ellipse
                  cx="16"
                  cy="28"
                  rx="10"
                  ry="3"
                  fill="url(#user-glow)"
                  opacity="0.5"
                />
              )}
              {/* Head */}
              <ellipse
                cx="16"
                cy="12"
                rx="6"
                ry="6"
                fill="url(#user-bg)"
                stroke="url(#user-edge)"
                strokeWidth="1.2"
                style={{
                  filter:
                    hovered || pressed
                      ? "drop-shadow(0 2px 12px #60a5fa88)"
                      : "drop-shadow(0 1px 2px #bae6fd)",
                  transition: "filter 0.18s",
                }}
              />
              {/* Body */}
              <path
                d="M8 25c0-4.418 5.372-7 8-7s8 2.582 8 7v2c0 1.104-.896 2-2 2H10c-1.104 0-2-.896-2-2v-2z"
                fill="url(#user-bg)"
                stroke="url(#user-edge)"
                strokeWidth="1.2"
                style={{
                  filter:
                    hovered || pressed
                      ? "drop-shadow(0 2px 12px #60a5fa88)"
                      : "drop-shadow(0 1px 2px #bae6fd)",
                  transition: "filter 0.18s",
                }}
              />
              {/* Shine */}
              <ellipse
                cx="16"
                cy="10"
                rx="3"
                ry="1"
                fill="#fff"
                opacity="0.35"
              />
              {/* Soft fill when pressed */}
              {pressed && (
                <ellipse
                  cx="16"
                  cy="12"
                  rx="6"
                  ry="6"
                  fill="#3b82f6"
                  fillOpacity="0.18"
                  style={{ filter: "blur(1px)" }}
                />
              )}
            </g>
          </svg>
          {/* Paper curl effect */}
          <span
            style={{
              position: "absolute",
              right: 2,
              bottom: 2,
              width: 10,
              height: 10,
              borderBottomRightRadius: 8,
              background: "linear-gradient(135deg, #e0f2fe 60%, #60a5fa 100%)",
              boxShadow: hovered ? "0 2px 8px #60a5fa" : "0 1px 2px #60a5fa",
              opacity: hovered ? 0.85 : 0.5,
              pointerEvents: "none",
              transition: "opacity 0.2s",
              zIndex: 1,
            }}
          />
        </span>
      </div>
    </header>
  );
};

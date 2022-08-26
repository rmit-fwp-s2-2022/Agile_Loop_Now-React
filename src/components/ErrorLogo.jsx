import React from "react";
function ErrorLogo({ className }) {
  return (
    // <svg
    //   width="128px"
    //   height="128px"
    //   viewBox="0 0 128 128"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <title />
    //   <path
    //     d="M111.38,86.92a10,10,0,0,0-14.15,0L75.31,65,64.71,75.61c.06.06,21.9,21.9,21.95,22a10,10,0,0,0-.74,14.81c6.8,6.8,18.34.94,17-8.5A10,10,0,0,0,111.38,86.92Z"
    //     style={{ fill: "#eaeaea" }}
    //   />
    //   <path
    //     d="M107.55,93.74a3,3,0,0,1-2.12-.88,1.49,1.49,0,0,0-2.11,0,3,3,0,1,1-4.24-4.24,7.49,7.49,0,0,1,10.59,0,3,3,0,0,1-2.12,5.12Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M42.08,31.77a10,10,0,0,0,0-14.15c-6.8-6.8-18.34-.94-17,8.5a10,10,0,1,0,6.31,16.22C31.49,42.39,54,64.94,54.1,65L64.71,54.39Z"
    //     style={{ fill: "#eaeaea" }}
    //   />
    //   <path
    //     d="M102.88,26.12a10,10,0,1,0-16.22,6.31c-.06.08-55.19,55.2-55.23,55.23a10,10,0,0,0-14.81-.74c-6.8,6.8-.94,18.34,8.5,17a10,10,0,1,0,17-5.65C87,53.32,47.15,93.16,97.23,43.08a10,10,0,0,0,14.15,0C118.18,36.28,112.32,24.74,102.88,26.12Z"
    //     style={{ fill: "#eaeaea" }}
    //   />
    //   <path
    //     d="M21.72,100.8a3,3,0,0,1-1.24-.27,7.5,7.5,0,0,1-3.7-9.93,3,3,0,1,1,5.46,2.49,1.49,1.49,0,0,0,.74,2,3,3,0,0,1-1.25,5.73Z"
    //     style={{ fill: "#ccc" }}
    //   />
    //   <path
    //     d="M33,113.05a3,3,0,0,1-1.24-.27,7.5,7.5,0,0,1-3.7-9.93,3,3,0,1,1,5.46,2.49,1.49,1.49,0,0,0,.74,2A3,3,0,0,1,33,113.05Z"
    //     style={{ fill: "#ccc" }}
    //   />
    //   <path
    //     d="M22.31,42.84a3,3,0,0,1-1.24-.27,7.49,7.49,0,0,1-3.7-9.93,3,3,0,0,1,5.46,2.49,1.49,1.49,0,0,0,.74,2,3,3,0,0,1-1.25,5.73Z"
    //     style={{ fill: "#ccc" }}
    //   />
    //   <path
    //     d="M91.31,112a3,3,0,0,1-1.24-.27,7.49,7.49,0,0,1-3.7-9.92,3,3,0,0,1,5.46,2.49,1.49,1.49,0,0,0,.74,2A3,3,0,0,1,91.31,112Z"
    //     style={{ fill: "#ccc" }}
    //   />
    //   <path
    //     d="M106.9,42a3,3,0,0,1-2.12-5.12,1.49,1.49,0,0,0,0-2.11A3,3,0,1,1,109,30.55a7.5,7.5,0,0,1,0,10.59A3,3,0,0,1,106.9,42Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M60.59,58.51,38,35.86a3,3,0,0,1,0-4.24l2.12-2.12L64.83,54.27Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M92.9,91,78.5,76.71a3,3,0,0,1,0-4.25l2.11-2.11L97.14,86.72Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M99.35,41.2,42.2,98.36l-.12-.13a10,10,0,0,0-5.44-2.79L91.43,40.65a5.2,5.2,0,0,1,7.37,0Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M38,29.89a3,3,0,0,1-2.12-5.12.62.62,0,0,0,0-.88l-.12-.09A3,3,0,1,1,39,18.7,6.63,6.63,0,0,1,40.15,29,3,3,0,0,1,38,29.89Z"
    //     style={{ fill: "#fff" }}
    //   />
    //   <path
    //     d="M97.49,82.93,84.77,70.22c-2.8-2.8-7,1.44-4.24,4.24l12.71,12.7c-4.29,7,3.18,8.37,4.43,4.61A7,7,0,0,1,109.25,89c5.76,5.76-1.4,15-8.38,11-3.44-2-6.42,3.24-3,5.21a12.79,12.79,0,0,0,2,.91,7,7,0,1,1-11.37-6.31,3,3,0,0,0,.19-4.48l-19.8-19.8L97.48,47.08a13,13,0,1,0,8.43-23.94,13,13,0,1,0-23.4,9.22l-17.8,17.8L46.08,31.52a13,13,0,1,0-23.94-8.43A13,13,0,1,0,31.36,46.5L49.86,65,31.37,83.49a13,13,0,1,0-9.25,23.38,13,13,0,1,0,24-8.38L64.71,79.85,82.49,97.64a13,13,0,1,0,23.37,9.24,13,13,0,1,0-8.38-23.95Zm-62.22-41a13,13,0,0,0,1.22-3.61c.7-3.9-5.2-5-5.91-1.06a7,7,0,1,1-11.83-6.2,7,7,0,0,1,8.55-1c3.38,2.07,6.52-3.05,3.13-5.12a13,13,0,0,0-2.35-1.12A7,7,0,1,1,40,29.64a3,3,0,0,0,0,4.24L60.46,54.39,54.1,60.76ZM40,110.25c-5.76,5.76-15-1.4-11-8.38,2-3.44-3.24-6.42-5.21-3a12.84,12.84,0,0,0-.93,2A7,7,0,1,1,28.64,89c.84.84,1.15,1.46,2.54,1.59,2,.17-.42,1.95,35.65-34.11h0L87.07,36.27c8.09,4.13,8.77-4,4.67-4.69A7,7,0,0,1,88,19.75c5.83-5.83,15.19,1.6,10.94,8.55-2.07,3.38,3.05,6.52,5.12,3.13a13,13,0,0,0,1.12-2.35A7,7,0,1,1,99.35,41a3,3,0,0,0-4.24,0L41.83,94.24A12.93,12.93,0,0,0,39.11,93c-3.76-1.25-5.65,4.45-1.88,5.7A7,7,0,0,1,40,110.25Z"
    //     style={{ fill: "#31352e" }}
    //   />
    //   <path
    //     d="M96.16,25.25A3,3,0,0,1,94,24.37a1.49,1.49,0,0,0-2.11,0,3,3,0,0,1-4.24-4.24,7.5,7.5,0,0,1,10.59,0,3,3,0,0,1-2.12,5.12Z"
    //     style={{ fill: "#fff" }}
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="w-6 h-6"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
}
export default ErrorLogo;
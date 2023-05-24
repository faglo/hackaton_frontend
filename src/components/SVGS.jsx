import React from 'react'
export default function SVGS ({ name, fill }) {
  switch (name) {
    case 'apps':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z"
            fill={fill} />
          <path
            d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
            fill={fill} />
          <path
            d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z"
            fill={fill} />
          <path
            d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
            fill={fill} />
        </svg>
      )
    case 'messages':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5 19H8C4 19 2 18 2 13L2 8C2 4 4 2 8 2L16 2C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
            stroke={fill} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M15.9965 11H16.0054" stroke={fill} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M11.9955 11H12.0045" stroke={fill} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M7.99451 11H8.00349" stroke={fill} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      )
    case 'tasks':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3701 8.88H17.6201" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.37988 8.88L7.12988 9.63L9.37988 7.38" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3701 15.88H17.6201" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.37988 15.88L7.12988 16.63L9.37988 14.38" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2L9 2C4 2 2 4 2 9L2 15C2 20 4 22 9 22Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'users':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'settings':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={fill} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12.88L2 11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke={fill} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'main':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15V18M21.636 12.958L21.357 14.895C20.87 18.283 20.626 19.976 19.451 20.988C18.276 22 16.553 22 13.106 22H10.894C7.44704 22 5.72404 22 4.54904 20.988C3.37404 19.976 3.13004 18.283 2.64304 14.895L2.36404 12.958C1.98404 10.321 1.79404 9.002 2.33504 7.875C2.87504 6.748 4.02604 6.062 6.32704 4.692L7.71204 3.867C9.80004 2.622 10.846 2 12 2C13.154 2 14.199 2.622 16.288 3.867L17.673 4.692C19.973 6.062 21.124 6.748 21.665 7.875" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    default:
      return (
        <div/>
      )
  }
}

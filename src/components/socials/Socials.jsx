import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Socials() {
  return (
    <div>
    <ul className="example-2">
      <li className="icon-content shadow rounded-lg">
        <a
          href="#"
          target="_blank"
          aria-label="Spotify"
          data-social="spotify"
        >
          <div className="filled"></div>
            <FaFacebook />
        </a>
        <div className="tooltip">Facebook</div>
      </li>
      <li className="icon-content shadow rounded-lg">
        <a
          href="#"
          target="_blank"
          aria-label="Pinterest"
          data-social="pinterest"
        >
          <div className="filled"></div>
            <FaYoutube />
        </a>
        <div className="tooltip">Youtube</div>
      </li>
      <li className="icon-content shadow rounded-lg">
        <a
          href="#"
          target="_blank"
          aria-label="Dribbble"
          data-social="dribbble"
        >
          <div className="filled"></div>
            <FaInstagram />
        </a>
        <div className="tooltip">Instagram</div>
      </li>
      <li className="icon-content shadow rounded-lg">
        <a
          href="#"
          target="_blank"
          aria-label="Telegram"
          data-social="telegram"
        >
          <div className="filled"></div>
          <svg version="1.1" viewBox="0 0 100 100">
            <path
              d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <div className="tooltip">Telegram</div>
      </li>
    </ul>
  </div>
  )
}
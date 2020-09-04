import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx';

import { Link } from "gatsby"

import css from './navigation.module.scss'


const ClockIcon = () => (<svg className={css.icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M32.25 58.5C46.7475 58.5 58.5 46.7475 58.5 32.25C58.5 17.7525 46.7475 6 32.25 6C17.7525 6 6 17.7525 6 32.25C6 46.7475 17.7525 58.5 32.25 58.5ZM30.7695 32.8104C30.3104 32.554 30 32.0632 30 31.5V11.5C30 10.6716 30.6716 10 31.5 10C32.3284 10 33 10.6716 33 11.5V30.8906L42.416 37.1679C43.1053 37.6275 43.2915 38.5588 42.832 39.2481C42.3725 39.9374 41.4412 40.1236 40.7519 39.6641L31.248 33.3282C31.0426 33.1912 30.8818 33.0123 30.7695 32.8104Z" fill="#BCBCBC"/>
</svg>);

const NightModeIcon = () => (<svg className={css.icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M53.6618 47.439C51.3113 48.1295 48.8239 48.5 46.25 48.5C31.7525 48.5 20 36.7475 20 22.25C20 16.5899 21.7914 11.3482 24.8382 7.06097C13.9498 10.2597 6 20.3265 6 32.25C6 46.7475 17.7525 58.5 32.25 58.5C41.0874 58.5 48.9048 54.1329 53.6618 47.439Z" fill="#BCBCBC"/>
  <path d="M40.5 12L42.4084 17.8734L48.584 17.8734L43.5878 21.5033L45.4962 27.3766L40.5 23.7467L35.5038 27.3766L37.4122 21.5033L32.416 17.8734L38.5916 17.8734L40.5 12Z" fill="#C4C4C4"/>
</svg>);

const PaletteIcon = () => (<svg className={css.icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0)">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.98505 25.1263C3.05075 39.0797 11.1729 53.5806 25.1263 57.5149C32.0103 59.4559 34.7691 55.5583 41.3817 41.3185C45.0206 33.4822 48.6156 36.9606 51.6218 39.8694C54.0785 42.2464 56.1419 44.2429 57.5149 39.3737C61.4492 25.4202 53.3271 10.9194 39.3736 6.98508C25.4202 3.05078 10.9193 11.1729 6.98505 25.1263ZM15.5921 31.4494C13.7317 30.9248 12.6487 28.9913 13.1733 27.1309C13.6978 25.2704 15.6313 24.1875 17.4918 24.7121C19.3522 25.2366 20.4352 27.1701 19.9106 29.0305C19.386 30.891 17.4526 31.9739 15.5921 31.4494ZM18.7745 18.3203C18.2499 20.1808 19.3329 22.1142 21.1933 22.6388C23.0538 23.1633 24.9872 22.0804 25.5118 20.2199C26.0364 18.3595 24.9534 16.426 23.093 15.9015C21.2325 15.3769 19.2991 16.4598 18.7745 18.3203ZM30.5214 19.035C28.6609 18.5104 27.578 16.5769 28.1025 14.7165C28.6271 12.856 30.5606 11.7731 32.421 12.2977C34.2815 12.8222 35.3644 14.7557 34.8398 16.6161C34.3153 18.4766 32.3818 19.5595 30.5214 19.035ZM13.3469 37.5697C12.8223 39.4302 13.9053 41.3637 15.7657 41.8882C17.6262 42.4128 19.5596 41.3299 20.0842 39.4694C20.6088 37.6089 19.5258 35.6755 17.6654 35.1509C15.8049 34.6263 13.8715 35.7093 13.3469 37.5697ZM21.8373 49.8341C19.9768 49.3095 18.8938 47.3761 19.4184 45.5156C19.943 43.6552 21.8764 42.5722 23.7369 43.0968C25.5974 43.6214 26.6803 45.5548 26.1557 47.4153C25.6312 49.2757 23.6977 50.3587 21.8373 49.8341ZM37.9986 16.4678C37.4741 18.3283 38.557 20.2617 40.4175 20.7863C42.2779 21.3108 44.2114 20.2279 44.7359 18.3674C45.2605 16.507 44.1776 14.5735 42.3171 14.049C40.4567 13.5244 38.5232 14.6073 37.9986 16.4678Z" fill="#BCBCBC"/>
  </g>
  <defs>
    <clipPath id="clip0">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>);

const SettingsIcon = () => (<svg className={css.icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0)">
    <path fillRule="evenodd" clipRule="evenodd" d="M37.4268 6.51034V0.176697H27.4268V6.44216C25.5708 6.78685 23.7833 7.32682 22.0866 8.03995C20.5293 8.67412 19.0206 9.46405 17.5843 10.4097L13.0848 5.91028L6.01377 12.9813L10.4251 17.3927C8.37604 20.3403 7.00054 23.6142 6.2986 27H0V37H6.1621C6.80855 40.6129 8.21544 44.1164 10.3828 47.2532L6.19057 51.4454L13.2616 58.5164L17.522 54.256C18.9576 55.2072 20.4662 56.0022 22.0237 56.6412C22.0798 56.6647 22.136 56.688 22.1922 56.7111C23.8579 57.3967 25.6097 57.9159 27.4268 58.248V64.1767H37.4268V58.1516C39.0656 57.8189 40.649 57.3336 42.1615 56.711C43.8693 56.0097 45.5181 55.1207 47.0764 54.044L51.2686 58.2362L58.3397 51.1651L54.0793 46.9047C55.0212 45.4831 55.81 43.99 56.4457 42.4487L56.4729 42.3827C57.189 40.6728 57.7294 38.871 58.0713 37H64V27H57.9749C57.2873 23.6128 55.9476 20.4624 54.0924 17.6857L58.5165 13.2616L51.4454 6.19053L47.0613 10.5747C44.2051 8.61919 40.9427 7.21357 37.4268 6.51034ZM42 32.5C42 37.7467 37.5228 42 32 42C26.4772 42 22 37.7467 22 32.5C22 27.2533 26.4772 23 32 23C37.5228 23 42 27.2533 42 32.5Z" fill="#BCBCBC"/>
  </g>
  <defs>
    <clipPath id="clip0">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>);

const Navigation = ({ state }) => (<>
  <div className={ clsx(css.navigationPanel, css[state]) }>
    <nav className={ css.nav }>
      <ul className={ css.menuitems }>
        <li className={ clsx(css.menuitem, css.menu_design) } >
          <Link to="/colors" title="Design">
            <PaletteIcon />
          </Link>
        </li>
        <li className={ clsx(css.menuitem, css.menu_time) }>
          <Link to="/" title="Time">
            <ClockIcon />
          </Link>
        </li>
        <li className={ clsx(css.menuitem, css.menu_nightmode) }>
          <Link to="/nightmode" title="Night Mode">
            <NightModeIcon />
          </Link>
        </li>
        <li className={ clsx(css.menuitem, css.menu_settings) }>
          <Link to="/settings" title="Settings">
            <SettingsIcon />
          </Link>
        </li>
      </ul>
    </nav>
    <svg className={ css.background } viewBox="0 0 412 276" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="206" cy="138" r="448" />
    </svg>
  </div>
  <div className={ clsx(css.backblur, css[state]) }></div>
</>
)

Navigation.propTypes = {
  state: PropTypes.string,
}

Navigation.defaultProps = {
  state: `closed`,
}

export default Navigation

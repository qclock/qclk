import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx';
import css from './menu.module.scss'

const Menu = ({ state, onClick }) => (
  <div className={ clsx(css.menu, css[state]) }>
    <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={e => onClick(e)}>
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="39" y="58" width="116" height="116">
        <circle cx="97" cy="116" r="58" fill="black"/>
      </mask>
      <g mask="url(#mask0)">
        <path className={ css.arc } fillRule="evenodd" clipRule="evenodd" d="M97 224.886C117.924 224.886 134.886 207.924 134.886 187C134.886 166.076 117.924 149.114 97 149.114C76.0763 149.114 59.1143 166.076 59.1143 187C59.1143 207.924 76.0763 224.886 97 224.886ZM97 226C118.539 226 136 208.539 136 187C136 165.461 118.539 148 97 148C75.4609 148 58 165.461 58 187C58 208.539 75.4609 226 97 226Z" />
        <circle className={ css.dot } cx="97" cy="136" r="7.5" stroke="#BCBCBC"  />
      </g>
    </svg>
  </div>
)

Menu.propTypes = {
  state: PropTypes.string,
  onClick: PropTypes.func,
}

Menu.defaultProps = {
  state: `closed`,
  onClick: () => {},
}

export default Menu

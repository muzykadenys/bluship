import React from 'react'
import '../bookButton/bookButton.scss'
import { ReactComponent as CalendarPlus } from '../../svg/icons/calendar_plus.svg'
import classNames from 'classnames'

function BookButton({ small }) {
  const clickBook = () => {
    // document.querySelector('#calendly_open').click()
  }
  return (
    <div
      onClick={clickBook}
      className={classNames(
        'BookButtonSection',
        small && 'BookButtonSection_Small',
      )}
    >
      <div className="BookButtonSection_Text">BOOK NOW</div>
      <div className="BookButtonSection_IconWrap ">
        <CalendarPlus className="BookButtonSection_IconWrap_Icon" />
      </div>
    </div>
  )
}

export default BookButton

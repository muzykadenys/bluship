import React, { useContext, useEffect, useRef, useState } from 'react'
import '../team/team.scss'
import { Context } from '../../App'

const teamData = [
  { name: 'Christopher Hartsook', img: '1.png', position: 'Co-founder & CEO' },
  { name: 'Jack Milton', img: '2.png', position: 'Co-founder & CMO' },
  { name: 'Joe Sainsbury', img: '3.png', position: 'Project Lead' },
  { name: 'Billy Jarvis', img: '4.png', position: 'Head of Partnership' },
  { name: 'Aleksa Šovljanski', img: '5.png', position: 'Community Manager' },
  { name: 'David Meurs', img: '6.png', position: 'Designer' },
  { name: 'Arnold Paran', img: '7.png', position: 'Acquisition Coordinator' },
]

function MemberCard({ name, img, position }) {
  return (
    <div className="MemberCard">
      <div
        className="MemberCard_Main"
        style={{
          backgroundImage: `linear-gradient(to top, #9f63ff 0%, #ff2da031 50%),
      url('./img/team/${img}')`,
        }}
      >
        <div className="MemberCard_Main_Name">{name}</div>
        <div className="MemberCard_Main_Position">
          <div className="MemberCard_Main_Position_Text">{position}</div>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const screenWidth = useContext(Context).screenWidth

  const [numberOfScroll, setNumberOfScroll] = useState(0)
  const sliderWrapRef = useRef(null)
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)

  const showControlls = () => {
    if (sliderWrapRef !== null)
      return sliderWrapRef.current.querySelectorAll('.MemberCard').length

    return 0
  }

  const clickArrow = (direction) => {
    // console.log(sliderWrapRef.current.scrollLeft)
    if (sliderWrapRef !== null) {
      if (direction === 'right') {
        sliderWrapRef.current.scrollLeft += 250
      } else if (direction === 'left') {
        sliderWrapRef.current.scrollLeft -= 250
      }
    }
  }

  useEffect(() => {
    leftArrowRef.current.style = 'pointer-events: none'
    leftArrowRef.current.style.opacity = '0.5'

    sliderWrapRef.current.addEventListener('scroll', (event) => {
      const summ = Math.ceil(
        sliderWrapRef.current.scrollLeft + sliderWrapRef.current.clientWidth,
      )
      if (summ >= sliderWrapRef.current.scrollWidth) {
        rightArrowRef.current.style = 'pointer-events: none'
        rightArrowRef.current.style.opacity = '0.5'
      } else {
        rightArrowRef.current.style = 'pointer-events: all'
        rightArrowRef.current.style.opacity = '1'
      }

      if (sliderWrapRef.current.scrollLeft == 0) {
        leftArrowRef.current.style = 'pointer-events: none'
        leftArrowRef.current.style.opacity = '0.5'
      } else {
        leftArrowRef.current.style = 'pointer-events: all'
        leftArrowRef.current.style.opacity = '1'
      }
    })
  }, [])

  return (
    <div id="team_section" className="TeamSection_Wrap">
      <div className="TeamSection">
        <div className="TeamSection_Info">
          <div className="TeamSection_Info_Line"></div>

          <div className="TeamSection_Info_Main">
            <div className="TeamSection_Info_Main_Pin">
              <div className="TeamSection_Info_Main_Pin_Button">TEAM</div>
            </div>

            <div className="TeamSection_Info_Main_Text">
              <div className="TeamSection_Info_Main_Text_Big">
                Your Dedicated Growth Team
              </div>

              <div className="TeamSection_Info_Main_Text_Small">
                <div className="TeamSection_Info_Main_Text_Small_1">
                  Bluship only partners with a select number of clients,
                  enabling us to prioritize your business & provide the
                  attention it deserves. Wouldn't it be fantastic to have a team
                  of{' '}
                  <b>
                    highly experienced CMOs on board without breaking the bank?
                  </b>{' '}
                  The good news is, we've got you covered.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={sliderWrapRef} className="TeamSection_Members">
          {teamData.map((el, index) => (
            <MemberCard {...el} key={`TSM_${index}`} />
          ))}
        </div>

        {(screenWidth < 1440 && screenWidth !== 0) || true ? (
          <div className="TeamSection_Controll">
            <div
              ref={leftArrowRef}
              onClick={(e) => clickArrow('left')}
              className="TeamSection_Controll_Left TeamSection_Controll_El"
            ></div>
            <div
              ref={rightArrowRef}
              onClick={(e) => clickArrow('right')}
              className="TeamSection_Controll_Right TeamSection_Controll_El"
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Team

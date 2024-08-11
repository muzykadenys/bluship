import React, { useContext, useEffect, useRef, useState } from 'react'
import '../services/services.scss'
import { ReactComponent as Vector } from '../../svg/icons/vector.svg'
import ServiceData from '../../configs/serviceData.json'
import { Context } from '../../App'

function ServiceContainer({
  img,
  title,
  index,
  setSelectedService,
  clickService,
}) {
  return (
    <div
      onClick={(e) => {
        clickService(e, true)
        setSelectedService(index)
      }}
      onMouseEnter={() => {
        setSelectedService(index)
      }}
      className="ServiceContainer"
    >
      <div className="ServiceContainer_Icon">
        <img
          src={`./img/services/${img}`}
          className="HomeSection_Images_ShipFly"
        />
      </div>
      <div className="ServiceContainer_Title">{title}</div>
      <div className="ServiceContainer_Button">
        <Vector className="ServiceContainer_Button_Arrow" />
      </div>
    </div>
  )
}

function PopupServices({ title, content, link, clickService, display}) {
  return (
    <div onClick={clickService} style={{display: display}} className="PopupServicesSection">
      <div className="PopupServicesSection_Main">
        <div className="PopupServicesSection_Main_Close">
          <div
            onClick={(e) => clickService(e, true)}
            className="PopupServicesSection_Main_Close_Button"
          >
            <div className="PopupServicesSection_Main_Close_Button_Line1"></div>
            <div className="PopupServicesSection_Main_Close_Button_Line2"></div>
          </div>
        </div>

        <div className="PopupServicesSection_Main_Text">
          <div className="PopupServicesSection_Main_Text_1">{title}</div>
          <div className="PopupServicesSection_Main_Text_2">{content}</div>
        </div>

        <div className="PopupServicesSection_Main_Button">DISCOVER</div>

        <div className="PopupServicesSection_Main_Drone"></div>
      </div>
    </div>
  )
}

function Services() {
  const [selectedService, setSelectedService] = useState(5)
  const [serviceData] = useState(ServiceData.data)
  const screenWidth = useContext(Context).screenWidth

  const [popupToggle, setPopupToggle] = useState(false)

  const clickService = (event, propagation) => {
    if (event.target === event.currentTarget || propagation) {
      setPopupToggle((el) => !el)
    }
  }

  return (
    <>
      <div id="services_section" className="SevicesServices_Wrap">
        <div className="SevicesServices">
          <div className="SevicesServices_Info">
            <div className="SevicesServices_Info_Line"></div>

            <div className="SevicesServices_Info_Main">
              <div className="SevicesServices_Info_Main_Pin">
                <div className="SevicesServices_Info_Main_Pin_Button">
                  SERVICES
                </div>
              </div>

              <div className="SevicesServices_Info_Main_Text">
                <div className="SevicesServices_Info_Main_Text_Big">
                  Capabilities
                </div>

                <div className="SevicesServices_Info_Main_Text_Small">
                  <div className="SevicesServices_Info_Main_Text_Small_1">
                    Creating and fostering a sense of community is hard, and it
                    demands a much more strategic approach. But don't worry,
                    we're here to help you out!
                  </div>

                  <div className="SevicesServices_Info_Main_Text_Small_2">
                    Don't leave the success of your business to chance -{' '}
                    <span>let's win together!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="SevicesServices_MainWrap">
            <div className="SevicesServices_MainWrap_Left">
              <div className="SevicesServices_MainWrap_Left_Title">
                {serviceData[selectedService].title}
              </div>
              <div className="SevicesServices_MainWrap_Left_Content">
                {serviceData[selectedService].content}
              </div>
            </div>

            <div className="SevicesServices_MainWrap_Right">
              <div className="SevicesServices_MainWrap_Right_Top">
                <div className="SevicesServices_MainWrap_Right_Top_Text">
                  OUR SERVICE LIST:
                </div>

                <div className="SevicesServices_MainWrap_Right_Top_Signs">
                  <img src={'./img/icons/vector.svg'} />
                  <img src={'./img/icons/vector.svg'} />
                  <img src={'./img/icons/vector.svg'} />
                </div>
              </div>

              <div className="SevicesServices_MainWrap_Right_Bottom">
                {serviceData.map((el, index) => (
                  <ServiceContainer
                    clickService={clickService}
                    setSelectedService={setSelectedService}
                    index={index}
                    key={`SMRB_${index}`}
                    {...el}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {popupToggle && screenWidth < 1440 && screenWidth !== 0 ? (
        <PopupServices
          {...serviceData[selectedService]}
          clickService={clickService}
        />
      ) : null} */}

      <PopupServices
        display={
          popupToggle && screenWidth < 1440 && screenWidth !== 0
            ? 'flex'
            : 'none'
        }
        {...serviceData[selectedService]}
        clickService={clickService}
      />
    </>
  )
}

export default Services

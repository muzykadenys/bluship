import React from 'react'
import '../metrics/metrics.scss'

function Metrics() {
  return (
    <div className='MetricsSection_Wrap'>
      <div className="MetricsSection">
        <div className="MetricsSection_Block">
          <img
            src="./img/metrics/1.svg"
            className="MetricsSection_Block_Image"
          />

          <div className="MetricsSection_Block_Text">
            <div className="MetricsSection_Block_Text_Big">650+</div>
            <div className="MetricsSection_Block_Text_Small">
              COMPANIES IN OUR NETWORK
            </div>
          </div>
        </div>

        <div className="MetricsSection_Block">
          <img
            src="./img/metrics/2.svg"
            className="MetricsSection_Block_Image"
          />

          <div className="MetricsSection_Block_Text">
            <div className="MetricsSection_Block_Text_Big">500+</div>
            <div className="MetricsSection_Block_Text_Small">
              ALPHA CALL CHANNELS
            </div>
          </div>
        </div>

        <div className="MetricsSection_Block">
          <img
            src="./img/metrics/3.svg"
            className="MetricsSection_Block_Image"
          />

          <div className="MetricsSection_Block_Text">
            <div className="MetricsSection_Block_Text_Big">150+</div>
            <div className="MetricsSection_Block_Text_Small">
              INFLUENCERS CONNECTIONS
            </div>
          </div>
        </div>

        <div className="MetricsSection_Block">
          <img
            src="./img/metrics/4.svg"
            className="MetricsSection_Block_Image"
          />

          <div className="MetricsSection_Block_Text">
            <div className="MetricsSection_Block_Text_Big">15 mil</div>
            <div className="MetricsSection_Block_Text_Small">
              IN BLOCKCHAIN SALES
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics

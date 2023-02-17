import React from "react";
import Chart from 'react-apexcharts'


const ProfessionalSkills = () => {
  const data =  {
          
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['Anime', 'Fitness ', 'Music ', 'Books ', 'Travelling '],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    },
  }
  return (
    <div className="container-fluid ProfessionalSkillsMainBody">
      <div className="row ">
        <div className="col-sm-12 col-lg-6 px-4">
          <div>
            <p className="pt-5" style={{ color: "rgb(255, 54, 54)" }}>
              FEATURES
            </p>
            <h3 className="font-weight-bold pb-3">DEVELOPMENT SKILLS</h3>
            <div className="d-flex justify-content-between">
              <p className="mb-1">WORDPRESS</p>
              <p className="mb-1">95%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value1 "></div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-1">HTML & CSS</p>
              <p className="mb-1">90%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value2 progress-value1"></div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-1">JAVASCRIPT</p>
              <p className="mb-1">80%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value3 progress-value1"></div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-1">REACT</p>
              <p className="mb-1">75%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value4 progress-value1"></div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-1">Node JS</p>
              <p className="mb-1">70%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value5 progress-value1"></div>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-1">PHP</p>
              <p className="mb-1">60%</p>
            </div>
            <div className="progress mb-3">
              <div className="progress-value6 progress-value1"></div>
            </div>

          </div>
        </div>
        <div className="col-sm-12 col-lg-6 px-4">
          <div>
            <p className="pt-5" style={{ color: "rgb(255, 54, 54)" }}>
              LET'S HAVE FUN!
            </p>
            <h3 className="font-weight-bold pb-3">HOBBIES</h3>
            
      <div id="chart" className="mb-5">
  <Chart options={data.options}  series={data.series} type="polarArea" width={400} style={{display:"flex",justifyContent:"center" }}/>
</div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;

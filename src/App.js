import { useState, useEffect } from 'react' 
import { makeBarChartHappen, makeRadarHappen } from './chart/script'
import "./Chart.css"
import './App.css';

function App() {
  const years = [
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014'
  ]

  const current = {
    year: '2022',
    role: 'Frontend Engineer',
    company: 'Vail Systems',
    text: 'Support feature development and ongoing maintenance of Ruby on Rails application with React frontend.',
  }

  const [selection, setSelection] = useState(current);
  const [width, setWidth] = useState(window.innerWidth);

  const updateSelection = function(year) {
    switch(year) {
      case '2022':
        setSelection(current)
        break;
      case '2021':
        setSelection(
          {
            year: '2021',
            role: 'Frontend Engineer',
            company: 'Vail Systems',
            text: 'Support feature development and ongoing maintenance of Ruby on Rails application with React frontend.'
          }
        )
        break;
      case '2020':
        setSelection(
          {
            year: '2020',
            role: 'UX Designer',
            company: 'Vail Systems',
            text: 'Led product design and UX for consumer-facing telecommunications API. Managed the professional development of new UX researcher.'
          }
        )
        break;
      case '2019':
        setSelection(
          {
            year: '2019',
            role: 'UX Designer',
            company: 'Vail Systems',
            text: 'Led the creation and management of a new product design internship, resulting in the successful hiring of graduate-level UX researcher and designer.'
          }
        )
        break;
      case '2018':
        setSelection(
          {
            year: '2018',
            role: 'UX Designer',
            company: 'Vail Systems',
            text: 'Work closely with product and engineering to design B2B telecommunications software.'
          }
        )
        break;
      case '2017':
        setSelection(
          {
            year: '2017',
            role: 'Cofounder',
            company: 'Minda Labs',
            text: 'Led product vision, business development, and product management for virtual reality-based learning platform. Worked closely with academics and researchers at Yale, Stanford, and Harvard to understand student needs and learning objectives, and translate into feature set. Prioritized tasks and managed technical implementation for on-time deployment. Successfully launched paid pilots to over 1,200 students during Fall 2018.'
          }
        )
        break;
      case '2016':
        setSelection(
          {
            year: '2016',
            role: 'Product Designer',
            company: 'Enigma',
            text: 'Worked on all design aspects of enterprise-level data management ecosystem. Defined team-wide UX principles. Led product research, user interviews, and user testing. Lead designer on relaunch of Enigma Public, redesigning onboarding and initial user flows resulting in a 200% increase in daily active users.'
          }
        )
        break;
      case '2015':
        setSelection(
          {
            year: '2015',
            role: 'Product Designer',
            company: 'Chartbeat',
            text: 'Collaborated on UX and visual design of our enterprise-level analytics tools and dashboards for editorial teams. Contributed to product research, user interviews, and user testing.'
          }
        )
        break;
      case '2014':
        setSelection(
          {
            year: '2014',
            role: 'Marketing Web Designer',
            company: 'Chartbeat',
            text: 'Redefined visual brand, maintained style guide, created illustrations for Twitter campaigns, collateral, and public-facing website. Redesigned and collaborated to build the public-facing website.'
          }
        )
        break;
      default:
        return null;
    }
  }

  const yearLinks = years.map((year) =>
    <div
      key={year.toString()} 
      data-year={year}
      onClick={(event) => updateSelection(event.target.dataset.year)}>
      {year}
    </div>
  );
  
  //map over the years, and draw a bar chart
  //for each year. in the jsx conditionally show
  //based on the screenwidth. Hide the #chart div.
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    makeRadarHappen(width)
  }, [width])

  useEffect(() => {
    const index = years.indexOf(selection.year)
    makeBarChartHappen(index)
  })

  return (
    <div className="App">
      <div className="leftContainer">
        <div className="contactLinks">
          <a href="https://github.com/awkircher">Github</a>
          <a href="https://www.linkedin.com/in/ashleykircher/">LinkedIn</a>
        </div>
        <div>Ashley Kircher is a multidisciplinary frontend developer living in Chicago.</div>
      </div>
      <div className="rightContainer">
        <div className={`years ${selection.year}`}>
          {yearLinks}
        </div>
        <div className="description">
          <div>{selection.role}</div>
          <div>{selection.company}</div>
          <div>{selection.text}</div>
        </div>
        <div id="barChart"></div>
      </div>
      <div id="chart" 
        className={`${selection.year}`} 
        onClick={(event) => updateSelection(event.target.dataset.series)}>
      </div>
    </div>
  );
}

export default App;

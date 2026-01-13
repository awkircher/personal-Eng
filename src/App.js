import { useState, useEffect } from 'react' 
import { makeBarChartHappen, makeRadarHappen } from './chart/script'
import * as RoleDescriptions from './RoleDescriptions'
import "./Chart.css"
import './App.css';

function App() {
  const years = [
    '2023-current',
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

  const current = RoleDescriptions.year_current

  const [selection, setSelection] = useState(current);
  const [width, setWidth] = useState(window.innerWidth);

  const updateSelection = function(year) {
    switch(year) {
      case '2023-current':
        setSelection(current)
        break;
      case '2022':
        setSelection(RoleDescriptions.year_2022)
        break;
      case '2021':
        setSelection(RoleDescriptions.year_2021)
        break;
      case '2020':
        setSelection(RoleDescriptions.year_2020)
        break;
      case '2019':
        setSelection(RoleDescriptions.year_2019)
        break;
      case '2018':
        setSelection(RoleDescriptions.year_2018)
        break;
      case '2017':
        setSelection(RoleDescriptions.year_2017)
        break;
      case '2016':
        setSelection(RoleDescriptions.year_2016)
        break;
      case '2015':
        setSelection(RoleDescriptions.year_2015)
        break;
      case '2014':
        setSelection(RoleDescriptions.year_2014)
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

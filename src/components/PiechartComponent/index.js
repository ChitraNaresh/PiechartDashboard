import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

class PiechartComponent extends Component {
  state = {
    data: [],
    isTrue: true,
    runTimeShowVal: [],
  }

  fetchData = async () => {
    const userApiResponse = await fetch(
      'https://api.tvmaze.com/search/shows?q=all',
    )
    const jsonResponse = await userApiResponse.json()
    const userdata = []
    const runTime = []
    jsonResponse.forEach(eachItem => {
      userdata.push({
        count: eachItem.score,
        showName: eachItem.show.name,
      })
      runTime.push({
        count: eachItem.show.averageRuntime,
      })
    })
    this.setState({data: userdata, isTrue: false, runTimeShowVal: runTime})
    console.log(jsonResponse)
  }

  render() {
    const {data, isTrue, runTimeShowVal} = this.state
    const movieNames = data.map(eachObj => eachObj.showName)
    const runTimeMovie = runTimeShowVal.map(eachObj =>
      eachObj.count === null ? 0 : eachObj.count,
    )
    console.log(runTimeMovie)
    console.log(movieNames)
    console.log(runTimeShowVal)
    const isChecking = isTrue && this.fetchData()
    console.log(isChecking, data)
    return (
      <div className="pie-chart-inner-card">
        <h3 className="chart-label">Each show scores</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={data}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="50%"
              dataKey="count"
            >
              <Cell name={movieNames[0]} fill="#b3d23f" />
              <Cell name={movieNames[1]} fill="#a44c9e" />
              <Cell name={movieNames[2]} fill="#299438" />
              <Cell name={movieNames[3]} fill="#14AAF5" />
              <Cell name={movieNames[4]} fill="#158FAD" />
              <Cell name={movieNames[5]} fill="#6ACCBC" />
              <Cell name={movieNames[6]} fill="#480091" />
              <Cell name={movieNames[7]} fill="#FF985E" />
              <Cell name={movieNames[8]} fill="#D82C20" />
              <Cell name={movieNames[9]} fill="#CCAA14" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="flex-start"
            />
          </PieChart>
        </ResponsiveContainer>
        <hr />
        <hr />
        <h3 className="chart-label">Each Show run time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={runTimeShowVal}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="50%"
              dataKey="count"
            >
              <Cell name={runTimeMovie[0]} fill="#b3d23f" />
              <Cell name={runTimeMovie[1]} fill="#a44c9e" />
              <Cell name={runTimeMovie[2]} fill="#299438" />
              <Cell name={runTimeMovie[3]} fill="#14AAF5" />
              <Cell name={runTimeMovie[4]} fill="#158FAD" />
              <Cell name={runTimeMovie[5]} fill="#6ACCBC" />
              <Cell name={runTimeMovie[6]} fill="#480091" />
              <Cell name={runTimeMovie[7]} fill="#FF985E" />
              <Cell name={runTimeMovie[8]} fill="#D82C20" />
              <Cell name={runTimeMovie[9]} fill="#CCAA14" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="flex-start"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default PiechartComponent

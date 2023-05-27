import {Component} from 'react'
import {Link} from 'react-router-dom'
import PiechartComponent from '../PiechartComponent'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="dashboard-card">
        <nav className="navbar">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-analyzing-dashboard-5685808-4752467.png"
            alt="Dashboard"
            className="dashboard-img"
          />
          <div className="user-card">
            <p className="user-name">Rahul</p>
            <div>
              <Link to="/">
                <button type="button" className="logout-btn">
                  LOGOUT
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="bottom-section">
          <div className="dashboard-left-card">
            <h1 className="dashboard-left-heading">DASHBOARD</h1>
          </div>
          <div className="pie-chart-card">
            <h1 className="card-heading">MOVIE NAMES AND ITS SCORES</h1>
            <PiechartComponent />
          </div>
        </div>
      </div>
    )
  }
}

export default Home

import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import './App.css'
import Data from './data'

function App() {
  return (
    <div className="d-flex">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Rooms</th>
            <th>Area</th>
            <th>Floor</th>
            <th>Parking</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.map((e, index) => (
              <tr key={index}>
                <td>{e.title}</td>
                <td>{e.rooms}</td>
                <td>{e.area}</td>
                <td>{e.floor}</td>
                <td>{e.parking ? 'Yes' : 'No'}</td>
                <td>{e.price.toLocaleString()} zł</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div> 
  )
}

export default App

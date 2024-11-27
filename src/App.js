import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr colSpan="4">Employees</tr>
          <tr>
            <th colSpan="2">Name</th>
            <th colSpan="2">January</th>
            <th colSpan="2">February</th>
            <th colSpan="2">March</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>Expected</th>
            <th>Actual</th>
            <th>Expected</th>
            <th>Actual</th>
            <th>Expected</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td></td>
            <td>2000</td>
            <td>1800</td>
            <td>2000</td>
            <td>0</td>
            <td>2000</td>
            <td>0</td>

          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;

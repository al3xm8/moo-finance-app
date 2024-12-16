import './App.css';



function App() {

  const actual = 0;
  const expected = 0;

  const employees = [   

    {
      name: "John Doe",
      
      performance: {
        January: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        February: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        March: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q1: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        April: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        May: {actual: 0, expected:0, percentage: (actual/expected) * 100,},
        June: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q2: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        July: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        August: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        September: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q3: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        October: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        November: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        December: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q4: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Yearly: {actual: 0, expected:0, percentage: (actual/expected) * 100}
      }
    },
    {
      name: "Jane Smith",
      
      performance: {
        January: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        February: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        March: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q1: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        April: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        May: {actual: 0, expected:0, percentage: (actual/expected) * 100,},
        June: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q2: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        July: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        August: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        September: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q3: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        October: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        November: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        December: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Q4: {actual: 0, expected:0, percentage: (actual/expected) * 100},
        Yearly: {actual: 0, expected:0, percentage: (actual/expected) * 100}
      }
    }
  ]

  const months = [
    "January", "February", "March", "Q1",
    "April", "May", "June", "Q2",
    "July", "August", "September", "Q3",
    "October", "November", "December", "Q4", "Yearly"
  ]
  
  return (
    <div className="App">

      <table>
        <thead>
          <th className='table-header' colSpan={52}>Clients</th>          
            <tr>

              <th colSpan={1} className='table_month'></th>

              {months.map((month) => (
                <th colSpan={3} key={month} className='table_month'>{month}</th>
                ))
              }

            </tr>

            <th className='table_expected_actual'>Client</th>

            {months.map ((_, index) => (
              <>
                <th className='table_expected_actual'>Actual</th>
                <th className='table_expected_actual'>Expected</th>
                <th className='table_expected_actual'>%</th>
              </>
            ))}

          <tr>
            <td className='table_client_col name'></td>

              <td className='table_client_col janexp'></td>
              <td className='table_client_col janact'></td>
              <td className='table_client_col janper'></td>

              <td className='table_client_col febexp'></td>
              <td className='table_client_col febact'></td>
              <td className='table_client_col febper'></td>

              <td className='table_client_col marexp'></td>
              <td className='table_client_col maract'></td>
              <td className='table_client_col marper'></td>

            <td className='table_client_col q1exp'></td>
            <td className='table_client_col q1act'></td>
            <td className='table_client_col q1per'></td>

              <td className='table_client_col aprexp'></td>
              <td className='table_client_col apract'></td>
              <td className='table_client_col aprper'></td>

              <td className='table_client_col mayexp'></td>
              <td className='table_client_col mayact'></td>
              <td className='table_client_col mayper'></td>

              <td className='table_client_col junexp'></td>
              <td className='table_client_col junact'></td>
              <td className='table_client_col junper'></td>

            <td className='table_client_col q2exp'></td>
            <td className='table_client_col q2act'></td>
            <td className='table_client_col q2per'></td>

              <td className='table_client_col julnexp'></td>
              <td className='table_client_col julact'></td>
              <td className='table_client_col julper'></td>

              <td className='table_client_col augexp'></td>
              <td className='table_client_col augact'></td>
              <td className='table_client_col augper'></td>

              <td className='table_client_col sepexp'></td>
              <td className='table_client_col sepact'></td>
              <td className='table_client_col sepper'></td>

              <td className='table_client_col q3exp'></td>
              <td className='table_client_col q3act'></td>
              <td className='table_client_col q3per'></td>

              <td className='table_client_col octexp'></td>
              <td className='table_client_col octact'></td>
              <td className='table_client_col octper'></td>

              <td className='table_client_col novexp'></td>
              <td className='table_client_col novact'></td>
              <td className='table_client_col novper'></td>

              <td className='table_client_col decexp'></td>
              <td className='table_client_col decact'></td>
              <td className='table_client_col decper'></td>

            <td className='table_client_col q4exp'></td>
            <td className='table_client_col q4act'></td>
            <td className='table_client_col q4per'></td>

            <td className='table_client_col yearexp'></td>
            <td className='table_client_col yearact'></td>
            <td className='table_client_col yearper'></td>
          </tr>

          
          <tr>
          <th className='table_expected_actual'>Employee</th>

            {months.map ((_, index) => (
                <>
                  <th className='table_expected_actual'>Actual</th>
                  <th className='table_expected_actual'>Expected</th>
                  <th className='table_expected_actual'>%</th>
                </>
              ))}

          </tr>
          <tr>
            <td className='table_employee_col name'></td>

              <td className='table_employee_col janexp'></td>
              <td className='table_employee_col janact'></td>
              <td className='table_employee_col janper'></td>

              <td className='table_employee_col febexp'></td>
              <td className='table_employee_col febact'></td>
              <td className='table_employee_col febper'></td>

              <td className='table_employee_col marexp'></td>
              <td className='table_employee_col maract'></td>
              <td className='table_employee_col marper'></td>

            <td className='table_employee_col q1exp'></td>
            <td className='table_employee_col q1act'></td>
            <td className='table_employee_col q1per'></td>

              <td className='table_employee_col aprexp'></td>
              <td className='table_employee_col apract'></td>
              <td className='table_employee_col aprper'></td>

              <td className='table_employee_col mayexp'></td>
              <td className='table_employee_col mayact'></td>
              <td className='table_employee_col mayper'></td>

              <td className='table_employee_col junexp'></td>
              <td className='table_employee_col junact'></td>
              <td className='table_employee_col junper'></td>

            <td className='table_employee_col q2exp'></td>
            <td className='table_employee_col q2act'></td>
            <td className='table_employee_col q2per'></td>

              <td className='table_employee_col julnexp'></td>
              <td className='table_employee_col julact'></td>
              <td className='table_employee_col julper'></td>

              <td className='table_employee_col augexp'></td>
              <td className='table_employee_col augact'></td>
              <td className='table_employee_col augper'></td>

              <td className='table_employee_col sepexp'></td>
              <td className='table_employee_col sepact'></td>
              <td className='table_employee_col sepper'></td>

              <td className='table_employee_col q3exp'></td>
              <td className='table_employee_col q3act'></td>
              <td className='table_employee_col q3per'></td>

              <td className='table_employee_col octexp'></td>
              <td className='table_employee_col octact'></td>
              <td className='table_employee_col octper'></td>

              <td className='table_employee_col novexp'></td>
              <td className='table_employee_col novact'></td>
              <td className='table_employee_col novper'></td>

              <td className='table_employee_col decexp'></td>
              <td className='table_employee_col decact'></td>
              <td className='table_employee_col decper'></td>

            <td className='table_employee_col q4exp'></td>
            <td className='table_employee_col q4act'></td>
            <td className='table_employee_col q4per'></td>

            <td className='table_employee_col yearexp'></td>
            <td className='table_employee_col yearact'></td>
            <td className='table_employee_col yearper'></td>
          </tr>
          <tr>
            
            <th className='table_expected_actual'>Expense</th>

            {months.map ((_, index) => (
              <>
                <th className='table_expected_actual'>Actual</th>
                <th className='table_expected_actual'>Expected</th>
                <th className='table_expected_actual'>%</th>
              </>
            ))}

          </tr>

          <tr>
            <td className='table_expense_col name'></td>

              <td className='table_expense_col janexp'></td>
              <td className='table_expense_col janact'></td>
              <td className='table_expense_col janper'></td>

              <td className='table_expense_col febexp'></td>
              <td className='table_expense_col febact'></td>
              <td className='table_expense_col febper'></td>

              <td className='table_expense_col marexp'></td>
              <td className='table_expense_col maract'></td>
              <td className='table_expense_col marper'></td>

            <td className='table_expense_col q1exp'></td>
            <td className='table_expense_col q1act'></td>
            <td className='table_expense_col q1per'></td>

              <td className='table_expense_col aprexp'></td>
              <td className='table_expense_col apract'></td>
              <td className='table_expense_col aprper'></td>

              <td className='table_expense_col mayexp'></td>
              <td className='table_expense_col mayact'></td>
              <td className='table_expense_col mayper'></td>

              <td className='table_expense_col junexp'></td>
              <td className='table_expense_col junact'></td>
              <td className='table_expense_col junper'></td>

            <td className='table_expense_col q2exp'></td>
            <td className='table_expense_col q2act'></td>
            <td className='table_expense_col q2per'></td>

              <td className='table_expense_col julnexp'></td>
              <td className='table_expense_col julact'></td>
              <td className='table_expense_col julper'></td>

              <td className='table_expense_col augexp'></td>
              <td className='table_expense_col augact'></td>
              <td className='table_expense_col augper'></td>

              <td className='table_expense_col sepexp'></td>
              <td className='table_expense_col sepact'></td>
              <td className='table_expense_col sepper'></td>

              <td className='table_expense_col q3exp'></td>
              <td className='table_expense_col q3act'></td>
              <td className='table_expense_col q3per'></td>

              <td className='table_expense_col octexp'></td>
              <td className='table_expense_col octact'></td>
              <td className='table_expense_col octper'></td>

              <td className='table_expense_col novexp'></td>
              <td className='table_expense_col novact'></td>
              <td className='table_expense_col novper'></td>

              <td className='table_expense_col decexp'></td>
              <td className='table_expense_col decact'></td>
              <td className='table_expense_col decper'></td>

            <td className='table_expense_col q4exp'></td>
            <td className='table_expense_col q4act'></td>
            <td className='table_expense_col q4per'></td>

            <td className='table_expense_col yearexp'></td>
            <td className='table_expense_col yearact'></td>
            <td className='table_expense_col yearper'></td>
          </tr>
          
        </thead>
      </table>

    </div>
  );
}

export default App;

import React, { useState } from "react";

function Home() {
    const [employees, setEmployees] = useState([]);

    const handleData = (emps) => {
        console.log("Received employee data:", emps);
        setEmployees(emps); // Example of setting state with employee data
    };

    return (
        <div>
            <h1>Welcome to the Project</h1>
            <p>This is the home page of the project.</p>
            <div>
                {employees.length > 0 ? (
                    <ul>
                        {employees.map((emp, index) => (
                            <li key={index}>{emp.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No employees to display</p>
                )}
            </div>
        </div>
    );
}

export default Home;

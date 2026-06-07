import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/auth/students"
      );

      if (res.data.success) {
        setStudents(res.data.students);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <div className="card">
        <h1>Registered Students</h1>

        <p>
          Total Students : {students.length}
        </p>
      </div>

      <br />

      <div className="card">

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verified</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.role}</td>
                <td>
                  {student.isVerified ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}
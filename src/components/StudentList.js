import { useEffect, useState } from "react";
import Axios from "axios";
import StudentListRow from "./StudentListRow";
function StudentList() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    Axios.get("https://crud-deployment.onrender.com/students/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);
  const ListItems = () => {
    return arr.map((val, ind) => {
      return <StudentListRow obj={val} />;
    });
  };
  return (
    <>
      <h3 style={{fontFamily:'Kay Pho Du'}}  class="text-success m-3 text-center">Students List</h3>
      <table style={{maxWidth:"80%", margin:"0px auto" ,fontFamily:'Kay Pho Du'}} class="table table-secondary table-bordered table-striped border-dark mb-3">
        <thead>
          <tr style={{ backgroundColor: "forestgreen" }}>
            <th class="text-center text-bg-info">Name</th>
            <th class="text-center text-bg-info">Email</th>
            <th class="text-center text-bg-info">Roll Number</th>
            <th class="text-center text-bg-info">Action</th>
          </tr>
        </thead>
        <tbody>{ListItems()}</tbody>
      </table>
    </>
  );
}
export default StudentList;

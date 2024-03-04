import { useState, useEffect } from "react";
import baseUrl from "../../api/baseUrl";

const GitTeacherDetails = ({ id }) => {
  const token = localStorage.getItem("token");
  const [teacher, setTeacher] = useState("");
  const [teacherLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await baseUrl.get(`api/teacher/teacher/${id}`, {
          headers: { token: token },
        });
        setTeacher(response.data);
      } catch (error) {
        console.log("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return [teacherLoading, teacher];
};

export default GitTeacherDetails;

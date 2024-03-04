import SectionOne from "../../components/home/SectionOne";
import SectionTwo from "../../components/home/SectionTwo";
import SectionThree from "../../components/home/SectionThree";
import SectionFour from "../../components/home/SectionFour";
import AllTeacher from "../../components/teacher/AllTeacher";
import UserType from "../../Hooks/auth/userType";
import LoginHome from "../../components/home/LoginHome";

const Home = () => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  return (
    <div>
      <SectionOne />
      {student ? (
        <div>
          <LoginHome />
        </div>
      ) : (
        <div>
          {" "}
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <AllTeacher />
        </div>
      )}
    </div>
  );
};

export default Home;

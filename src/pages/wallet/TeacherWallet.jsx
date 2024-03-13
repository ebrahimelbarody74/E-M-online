import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import GitTeacherWallet from "../../Hooks/teacher/TeacherWallet";
import { Skeleton, Stack } from "@chakra-ui/react";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
const TeacherWallet = () => {
  const [walletLoading, wallet] = GitTeacherWallet();
  {
    walletLoading ? null : console.log("wallet", wallet);
  }
  if (walletLoading) {
    return (
      <div className="" style={{ minHeight: "60vh" }}>
        <Stack className="w-[90%] m-auto mt-[150px]">
          <Skeleton height="20px" className="mt-5" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <ScrollToTop />
        </Stack>
      </div>
    );
  }
  if (!wallet[0]) {
    // Handle the case when wallet is empty
    return (
      <div
        style={{ minHeight: "70vh" }}
        className="flex justify-center items-center"
      >
        <div className="ribbon2">
          <h1 className="font-bold m-2 text-white">No wallet data available</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-[150px] " style={{ minHeight: "50vh" }}>
      <div className="w-[90%] m-auto border shadow  p-5">
        <div className="flex justify-center">
          <div className="ribbon2">
            <h1 className="font-bold m-2 mx-7  text-white"> محفظة المدرس </h1>
          </div>
        </div>
        <div>
          <div className="my-5  md:flex justify-between">
            <h1 className="font-bold flex">
              <FaMoneyCheckAlt className="m-1 text-blue-500 text-xl" />
              رصيد المدرس : {wallet[0].value} جنية
            </h1>
            <h1 className="font-bold flex">
              {" "}
              <FaBookmark className="m-1 text-blue-500 text-xl" />
              عدد المشتركين : {wallet[0].nonline} طالب
            </h1>
            <h1 className="font-bold flex">
              {" "}
              <GrGroup className="m-1 text-blue-500 text-xl" />
              عدد طلاب السنتر : {wallet[0].ngroup} طالب
            </h1>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default TeacherWallet;

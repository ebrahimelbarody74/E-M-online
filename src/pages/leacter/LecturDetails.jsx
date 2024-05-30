import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

import GitLecturTdetails from "../../Hooks/teacher/GitLecturTdetails";
import UserType from "../../Hooks/auth/userType";
import DeleateCenterVedio from "../../Hooks/teacher/DeleateCenterVedio";
import DeleateExamG from "../../Hooks/teacher/DeleateExamG";
import DeleatPdf from "../../Hooks/teacher/DeleatPdf";
import GitLectureCenterDetails from "../../Hooks/student/GitLectureCenterDetails";
import LectureContent from "../../components/lecture/LectureContent";
import AlertDialogComponent from "../../components/lecture/AlertDialogComponent";
import Loading from "../../components/loading/Loading";

const LectureDetails = () => {
  const { id } = useParams();
  const [lectureLoading, lectures] = GitLectureCenterDetails({ id });
  const [lectureTLoading, lecturesT] = GitLecturTdetails({ id });
  const [userData, isAdmin, isTeacher] = UserType();
  const [deleteVideoCenter] = DeleateCenterVedio();
  const [deleteExamsG] = DeleateExamG();
  const [deletePdf] = DeleatPdf();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);

  const videosToMap = lectures?.videos || lecturesT?.videos || [];
  const pdfsToMap = lectures?.pdfs || lecturesT?.pdfs || [];
  const examName = lecturesT?.exam_name || lectures?.exam_name;
  const examId = lecturesT?.exam_id || lectures?.exam_id;
  const lastResult = lectures?.last_result;

  const handleDeleteVideo = (video) => {
    setSelectedItem(video);
    onOpen();
  };

  const handleDeletePdf = (pdf) => {
    setSelectedItem(pdf);
    onOpen();
  };

  const handleConfirmDelete = () => {
    if (selectedItem?.v_name) {
      deleteVideoCenter(selectedItem.id);
    } else if (selectedItem?.pdf_name) {
      deletePdf(selectedItem.id);
    }
    onClose();
  };

  if (lectureLoading || lectureTLoading) {
    return <Loading />;
  }

  console.log(lectures);
  return (
    <div className="mt-[150px]">
      <div className="mt-[120px]" style={{ minHeight: "80vh" }}>
        <div
          className="w-[90%] m-auto h-[400px] bg-[#0e0558] md:flex justify-between items-center p-10"
          style={{ borderRadius: "20px" }}
        >
          <Zoom>
            <div>
              <img
                src={lecturesT?.image || lectures?.image}
                className="w-[400px] m-auto "
                alt="Lecture"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </Zoom>
          <div className="md:flex">
            <div
              className="h-50px p-3 bg-yellow-500 m-2"
              style={{ borderRadius: "20px" }}
            >
              <h1 className="font-bold text-white">
                {lecturesT?.description || lectures?.description}
              </h1>
            </div>
            <div
              className="h-50px p-3 bg-red-500 m-2"
              style={{ borderRadius: "20px" }}
            >
              <h1 className="font-bold text-white">
                عدد الفيديوهات: {videosToMap.length}
              </h1>
            </div>
          </div>
        </div>

        <LectureContent
          videos={videosToMap}
          pdfs={pdfsToMap}
          isTeacher={isTeacher}
          onDeleteVideo={handleDeleteVideo}
          onDeletePdf={handleDeletePdf}
          examName={examName}
          examId={examId}
          lastResult={lastResult}
          onDeleteExam={() => deleteExamsG(id)}
        />

        <ScrollToTop />
      </div>

      <AlertDialogComponent
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleConfirmDelete}
        selectedItem={selectedItem}
        cancelRef={cancelRef}
      />
    </div>
  );
};

export default LectureDetails;

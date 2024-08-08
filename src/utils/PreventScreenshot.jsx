import React, { useEffect } from "react";

const ProtectPage = () => {
  useEffect(() => {
    // منع لقطة الشاشة باستخدام PrintScreen
    const handleKeyDown = (event) => {
      console.log(event.key, "event.key");
      if (event.key === "PrintScreen" || event.key == "Meta") {
        document.body.style.display = "none";
        // alert("Screenshot is disabled");
      }
    };

    // منع النقر بزر الفأرة الأيمن
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    // إضافة كل المستمعين للأحداث
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", disableRightClick);

    // إزالة المستمعين للأحداث عند الخروج من الصفحة
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  // Overlay فوق المحتوى لتعكير صفو الصور
  const ImageOverlay = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 9999,
      }}
    />
  );

  return (
    <div style={{ position: "relative" }}>
      {/* المحتوى المحمي */}
      <img src="your-image.jpg" alt="Protected" />

      {/* الطبقة المعكرة */}
      <ImageOverlay />
    </div>
  );
};

export default ProtectPage;

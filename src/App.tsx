const App = () => {
  const handlePermission = async () => {
    console.log("권한 요청 중...");

    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      console.log("알림 권한 허용 안됨");
      return;
    }

    console.log("알림 권한이 허용됨");
  };
  return (
    <div>
      <button type="button" onClick={handlePermission}>
        권한요청
      </button>
    </div>
  );
};

export default App;

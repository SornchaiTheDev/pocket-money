import Card from "@components/Card";

function TextStatus() {
  return (
    <Card className="p-4">
      <div className="flex justify-between flex-wrap gap-4 ">
        <div className="">
          <h2 className="font-semibold">วันนี้ใช้ไป</h2>
          <h1 className="text-3xl">100 บาท</h1>
        </div>
        <div className="">
          <h2 className="font-semibold">เดือนนี้ใช้ไป</h2>
          <h1 className="text-3xl">3,500 บาท</h1>
        </div>
      </div>
      <p className="text-red-500 mt-2 font-bold">เฉลี่ยวันละ (150.32 บาท)</p>
    </Card>
  );
}

export default TextStatus;

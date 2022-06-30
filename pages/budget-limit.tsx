import InputForm from "@components/form/InputForm";
import Page from "layout/Page";
function BudgetLimit() {
  return (
    <Page className="p-4 pt-10 flex flex-col justify-between">
      <div className="">
        <h2 className="text-xl font-semibold">ตั้งค่าข้อมูลการเงิน</h2>
        <div className="flex flex-col gap-6 mt-10">
          <InputForm title="จำนวนเงินที่จะใช้ในแต่ละวัน" placeholder="200" />
          <InputForm
            title="รายรับประจำเดือน"
            placeholder="200"
          />
        </div>
      </div>
      <button className="border-2 rounded-full py-3 bg-gray-900 text-white">
        ข้ามไปก่อน
      </button>
    </Page>
  );
}

export default BudgetLimit;

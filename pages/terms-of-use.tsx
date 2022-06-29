import React from "react";
import Page from "layout/Page";
import BacktoLogin from "@components/Backto";
function TermOfUse() {
  return (
    <Page className="px-4">
      <BacktoLogin href="/" title="กลับไปยังล็อคอิน" />
      <div className="bg-white w-full p-2 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg text-center my-4">
          เงื่อนไขการใช้งาน
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
          quasi debitis maxime cum incidunt officiis reprehenderit eos ducimus
          totam cumque placeat, nemo tempore libero quam distinctio iure error
          sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          quod quasi debitis maxime cum incidunt officiis reprehenderit eos
          ducimus totam cumque placeat, nemo tempore libero quam distinctio iure
          error sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste quod quasi debitis maxime cum incidunt officiis reprehenderit eos
          ducimus totam cumque placeat, nemo tempore libero quam distinctio iure
          error sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste quod quasi debitis maxime cum incidunt officiis reprehenderit eos
          ducimus totam cumque placeat, nemo tempore libero quam distinctio iure
          error sed!
        </p>
      </div>
    </Page>
  );
}

export default TermOfUse;

import { Layout } from "@/components";
import PrivacyHeading from "@/components/Privacy/heading";
import LastUpdate from "@/components/Privacy/lastupdate";
import OtherPolicies from "@/components/Privacy/otherpolicies";
import PrivacyText from "@/components/Privacy/privacytext";
import Reachout from "@/components/Privacy/reachout";
import { ReactElement } from "react";

function PrivacyPolicy() {
  return (
    <>
      <PrivacyHeading />
      <div className="container">
        <OtherPolicies />
        <LastUpdate />
        <PrivacyText />
        <Reachout />
      </div>
    </>
  );
}

export default PrivacyPolicy;

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

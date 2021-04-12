import React, { useEffect, useState } from "react";
import HowItWorksView from "./HowItWorksView";

const orderSteps = (steps) => {
  steps.sort((a, b) => a.stepNumber - b.stepNumber);
};

const getLatestVersion = (versions) => {
  versions.sort((a, b) => {
    return new Date(b.effectiveDate) - new Date(a.effectiveDate);
  });
  return versions[0];
};

const HowItWorksContainer = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error, status = " + res.status);
        return res.json();
      })
      .then((steps) => {
        orderSteps(steps);
        setSteps(
          steps.map((step) => {
            const content = getLatestVersion(step.versionContent);
            return {
              step: step.stepNumber,
              title: content.title,
              body: content.body,
            };
          })
        );
      })
      .catch((err) => {
        // for prod would have another useState hook to display errors
        console.log(err);
      });
  }, []);

  return <HowItWorksView steps={steps} />;
};
export default HowItWorksContainer;

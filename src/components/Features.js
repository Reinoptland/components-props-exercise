import FeatureItem from "./FeatureItem";
import React from "react";
import iconOnline from "../images/icon-online.svg";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnboarding from "../images/icon-onboarding.svg";
import iconApi from "../images/icon-api.svg";

export default function Features() {
  return (
    <section className="feature">
      <div className="feature__content container container--pall">
        <div className="feature__intro">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="feature__grid">
          <FeatureItem
            icon={iconOnline}
            iconAltText="online-icon"
            title="Online Banking"
            description="
                Our modern web and mobile applications allow you to keep 
                track of your finances wherever you are in the world.
            "
          />

          <FeatureItem
            icon={iconBudgeting}
            iconAltText="budgeting-icon"
            title="Simple Budgeting"
            description="
                See exactly where your money goes each month. 
                Receive notifications when you’re close to hitting your limits.
            "
          />

          <FeatureItem
            icon={iconOnboarding}
            iconAltText="onboarding-icon"
            title="Fast Onboarding"
            description="
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
            "
          />
          <FeatureItem
            icon={iconApi}
            iconAltText={"api-icon"}
            title="Open API"
            description="
                Manage your savings, investments, pension, and much more from one
                account. Tracking your money has never been easier.
          "
          />
        </div>
      </div>
    </section>
  );
}

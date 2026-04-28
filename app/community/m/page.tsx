import type { Metadata } from "next";
import CommunityLanding from "./CommunityLanding";

export const metadata: Metadata = {
  title: "Join the Community on Mirchi35 Pulse",
  description:
    "Open this community in the Mirchi35 Pulse app. Don't have the app? Download it from the Play Store.",
  openGraph: {
    title: "Join the Community on Mirchi35 Pulse",
    description:
      "Open this community in the Mirchi35 Pulse app. Discover events, offers and updates from local communities.",
    images: ["/og.png"],
    type: "website",
  },
};

export default function Page() {
  return <CommunityLanding />;
}

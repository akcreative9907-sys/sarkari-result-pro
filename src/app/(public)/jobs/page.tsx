import { Metadata } from "next";
import { ListingPage } from "@/components/site/listing-page";
export const metadata: Metadata = { title: "Latest Government Jobs", description: "Latest Sarkari jobs with AI summaries, eligibility, dates, fees, and official apply links." };
export default function JobsPage() { return <ListingPage type="JOB" title="Latest Jobs" description="Fresh government vacancies from SSC, UPSC, Railway, Banking, Police, PSC, Defense, Teaching, and universities." />; }

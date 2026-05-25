import { ListingPage } from "@/components/site/listing-page";
export const metadata = { title: "Latest Results" };
export default function ResultsPage() { return <ListingPage type="RESULT" title="Results" description="Exam results, scorecards, cutoff notices, merit lists, and document-verification updates." />; }

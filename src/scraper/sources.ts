export const scrapeSources = [
  { name: "SSC", category: "SSC", urls: ["https://ssc.gov.in/api/feeds/news", "https://ssc.gov.in/"] },
  { name: "UPSC", category: "UPSC", urls: ["https://upsc.gov.in/whats-new", "https://upsc.gov.in/examinations"] },
  { name: "Railway", category: "Railway", urls: ["https://www.rrbcdg.gov.in/", "https://indianrailways.gov.in/"] },
  { name: "Banking", category: "Banking", urls: ["https://www.ibps.in/", "https://sbi.co.in/web/careers"] },
  { name: "Police", category: "Police", urls: ["https://ssc.gov.in/", "https://www.mha.gov.in/en/notifications/vacancies"] },
  { name: "State PSC", category: "State PSC", urls: ["https://uppsc.up.nic.in/", "https://mpsc.gov.in/"] },
  { name: "NTA", category: "NTA", urls: ["https://www.nta.ac.in/", "https://exams.nta.ac.in/"] },
  { name: "Universities", category: "Universities", urls: ["https://www.ugc.gov.in/jobs", "https://cuet.samarth.ac.in/"] },
  { name: "Defense", category: "Defense", urls: ["https://joinindianarmy.nic.in/", "https://agnipathvayu.cdac.in/"] },
  { name: "Teaching", category: "Teaching", urls: ["https://ctet.nic.in/", "https://kvsangathan.nic.in/"] }
] as const;

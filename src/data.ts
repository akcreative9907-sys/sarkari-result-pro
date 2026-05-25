export const categories = [
  { name: "SSC", slug: "ssc", description: "Staff Selection Commission jobs, admit cards, answer keys, and results." },
  { name: "UPSC", slug: "upsc", description: "Civil services, defense services, engineering services, and UPSC updates." },
  { name: "Railway", slug: "railway", description: "RRB, RRC, metro, loco pilot, technician, and railway recruitment updates." },
  { name: "Banking", slug: "banking", description: "IBPS, SBI, RBI, insurance, finance, and public-sector bank exams." },
  { name: "Police", slug: "police", description: "Constable, SI, state police, jail, fire, and home guard recruitment." },
  { name: "State PSC", slug: "state-psc", description: "State public service commission vacancies, results, and interviews." },
  { name: "NTA", slug: "nta", description: "NTA entrance exams, answer keys, scorecards, and admissions." },
  { name: "Universities", slug: "universities", description: "University admissions, results, teaching and non-teaching jobs." },
  { name: "Defense", slug: "defense", description: "Army, Navy, Air Force, Coast Guard, and paramilitary updates." },
  { name: "Teaching", slug: "teaching", description: "TET, assistant professor, PGT, TGT, PRT, and educator jobs." }
] as const;
export const featuredPosts = [
  { type: "JOB", title: "SSC Combined Graduate Level 2026 Online Form", slug: "ssc-cgl-2026-online-form", organization: "Staff Selection Commission", category: "SSC", state: "All India", qualification: "Graduate", vacancyCount: 17727, closingDate: "2026-06-24", summary: "Graduate-level central government recruitment for assistant, inspector, auditor, and officer roles across ministries.", badge: "Live" },
  { type: "ADMIT_CARD", title: "UPSC Civil Services Prelims 2026 Admit Card", slug: "upsc-cse-prelims-2026-admit-card", organization: "Union Public Service Commission", category: "UPSC", state: "All India", qualification: "Graduate", vacancyCount: 1056, closingDate: "2026-06-01", summary: "Hall ticket release tracker, exam city guidance, reporting time, and direct official download instructions.", badge: "Hot" },
  { type: "RESULT", title: "RRB Technician 2026 CBT Result", slug: "rrb-technician-2026-cbt-result", organization: "Railway Recruitment Board", category: "Railway", state: "All India", qualification: "ITI / Diploma", vacancyCount: 9144, closingDate: "2026-05-30", summary: "Region-wise result links, cutoff status, document verification timeline, and scorecard access details.", badge: "New" },
  { type: "ANSWER_KEY", title: "NTA CUET UG 2026 Provisional Answer Key", slug: "nta-cuet-ug-2026-answer-key", organization: "National Testing Agency", category: "NTA", state: "All India", qualification: "12th Pass", vacancyCount: 0, closingDate: "2026-05-29", summary: "Challenge window, response sheet access, fee details, and final answer key timeline for CUET UG.", badge: "Today" }
] as const;

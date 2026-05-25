import cron from "node-cron";
import { runUpdateEngine } from "@/scraper/engine";
async function tick() { const result = await runUpdateEngine(); console.log(`[update-engine] fetched=${result.fetched} created=${result.created} failed=${result.failed}`); }
if (process.env.RUN_ONCE === "true") tick().catch((error) => { console.error(error); process.exit(1); });
else cron.schedule("*/30 * * * *", () => tick().catch(console.error));

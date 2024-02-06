import { defineClientConfig } from "vuepress/client";
import { SpeedInsights } from '@vercel/speed-insights/vue'


export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("SpeedInsights", SpeedInsights);
  },
});
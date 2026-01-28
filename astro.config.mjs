// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://agentic-dev-library.github.io/meshy-content-generator",
  base: "/meshy-content-generator",
  integrations: [
    starlight({
      title: "meshy-content-generator",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/agentic-dev-library" }],
      sidebar: [
        { label: "Overview", link: "/" },
        { label: "Getting Started", link: "/getting-started" },
        { label: "CLI", link: "/cli" },
        { label: "API Server", link: "/api" },
        { label: "Preview", link: "/preview" },
        { label: "Use Cases", link: "/use-cases" },
        { label: "Pipeline Walkthrough", link: "/pipeline-walkthrough" },
        { label: "CI Setup", link: "/ci-setup" },
        { label: "Meshy Ops", link: "/mesh-ops" },
        { label: "Troubleshooting", link: "/troubleshooting" },
        { label: "Manifests", link: "/manifest" },
        { label: "Pipelines", link: "/pipelines" },
        { label: "Testing", link: "/testing" },
        { label: "Meshy API", link: "/providers" },
        { label: "Meshy Reference", link: "/meshy-api" },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
});

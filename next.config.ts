import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { cpus: 1, workerThreads: true, webpackBuildWorker: false, useTypeScriptCli: false },
};

export default config;

import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // When repo has lockfile at root, point Next to prototype as workspace root for tracing
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;

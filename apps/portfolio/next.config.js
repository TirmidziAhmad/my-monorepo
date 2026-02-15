import { withVelite } from "@velite/plugin-next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withVelite(nextConfig);

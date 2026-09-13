import type { NextConfig } from 'next';

const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPagesBuild ? '' : '/FamilyRecipes',
  assetPrefix: '/FamilyRecipes',
};

export default nextConfig;

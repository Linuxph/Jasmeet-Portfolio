/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {},
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: '@locator/webpack-loader',
          options: { 
            enabled: true
          }
        }]
      });
    }
    return config;
  }
}

export default nextConfig

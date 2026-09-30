import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const mockApiPlugin = () => ({
  name: 'mock-api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/academician/me') {
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            success: true,
            academician: {
              fullName: "Dr. Sarah Jenkins",
              email: "s.jenkins@university.edu",
              institutionName: "Stanford University",
              designation: "Senior Professor & Department Chair",
              department: "Computer Science & Artificial Intelligence"
            }
          })
        );
        return;
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [
    react(),
    mockApiPlugin(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
  resolve: {
    alias: {
      'next/navigation': path.resolve(__dirname, './next-navigation-mock.js'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});

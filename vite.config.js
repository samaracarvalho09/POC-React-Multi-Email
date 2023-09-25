import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Configure alias se necessário
//     },
//   },
//   esbuild: {
//     jsxFactory: 'React.createElement',
//     jsxFragment: 'React.Fragment',
//     // Adicione uma extensão .jsx personalizada para arquivos .js
//     loaders: {
//       '.js': 'jsx',
//     },
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom'],
//   },
// });

export default defineConfig(() => ({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
}));
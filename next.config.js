/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática — gera pasta "out/" pronta para upload via FTP
  output: "export",

  // Desabilita otimização de imagem (incompatível com export estático)
  images: {
    unoptimized: true,
  },

  // Garante trailing slash para compatibilidade com servidores FTP/Apache/Nginx
  trailingSlash: true,
};

module.exports = nextConfig;

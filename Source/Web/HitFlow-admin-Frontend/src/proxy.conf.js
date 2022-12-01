const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "https://localhost:4600",
    secure: false,
    logLevel: "info"
  }
]

module.exports = PROXY_CONFIG;

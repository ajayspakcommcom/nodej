exports.dataBaseConfig = {
  server: "P3NWPLSK12SQL-v15.shr.prod.phx3.secureserver.net",
  user: "spakDb",
  password: "Spak@123-",
  port: 1433,
  database: "bsvDb",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, //change to true for local dev / self-signed certs
  },
};
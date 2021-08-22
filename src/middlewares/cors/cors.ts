import cors from "cors";

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.FRONTEND_PRODUCTION
      : process.env.FRONTEND_DEV,
  preflightContinue: false,
};

export default () => cors(options);

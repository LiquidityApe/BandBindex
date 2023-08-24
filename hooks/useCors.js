// hooks/useCors.js
import Cors from "cors";

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const useCors = (origin) => {
  // Initialize cors middleware with the specified origin
  const cors = initMiddleware(
    Cors({
      origin: origin,
      methods: ["GET", "POST", "PUT", "DELETE"], // Adjust as per your requirements
    })
  );
  return cors;
};

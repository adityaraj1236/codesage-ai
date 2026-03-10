import express from "express";
const injectionPatterns = [
  "ignore previous instructions",
  "system override",
  "return the following json",
  "reveal system prompt"
];

export const promptInjectionMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const code = req.body.code?.toLowerCase() || "";

  const isInjection = injectionPatterns.some(pattern =>
    code.includes(pattern)
  );

  if (isInjection) {
    return res.status(400).json({
      error: "Prompt injection attempt detected"
    });
  }

  next();
};
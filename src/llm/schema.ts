import { z } from "zod";

export const reviewSchema = z.object({
  issues: z.array(
    z.object({
      line: z.number().describe("Line number where issue occurs"),
      problem: z.string().describe("Description of the issue"),
      severity: z.enum(["low", "medium", "high"]).describe("Severity level")
    })
  ),

  suggestions: z.array(
    z.string().describe("Suggestions to improve the code")
  ),

//   score: z.number().min(0).max(10).describe("Overall code quality score") I will calculate this score based on the issues detected, so no need for the model to return it it is determined by the reviewService
});
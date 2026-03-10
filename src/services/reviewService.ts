import {reviewChain} from "../llm/reviewChain.ts"


function calculateScore(issues: { severity: "low" | "medium" | "high" }[]) {
  const deductions = issues.reduce((acc, issue) => {
    if (issue.severity === "high") return acc + 3;
    if (issue.severity === "medium") return acc + 2;
    return acc + 1;
  }, 0);

  const score = 10 - deductions;
  return Math.max(0, Math.min(10, score));
}

export const reviewService = async (code: string) => {
    try {
        const review = await reviewChain.invoke({ code });
        const score =  calculateScore(review.issues);
        return {...review , score};
    } catch (error) {
        console.error('Error occurred while reviewing code:', error);
        throw new Error('Failed to review code');
    }
};

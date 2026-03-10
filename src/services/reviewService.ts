import {reviewChain} from "../llm/reviewChain.ts"


function calculateScore(issues: {severity: "low" | "medium" | "high"}[]) {
  let score = 10;
  issues.forEach(issue => {
    if (issue.severity === "high") score -= 3;
    if (issue.severity === "medium") score -= 2;
    if (issue.severity === "low") score -= 1;
  });
  return Math.max(0, score);
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

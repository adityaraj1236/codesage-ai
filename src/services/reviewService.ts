import {reviewChain} from "../llm/reviewChain.ts"

export const reviewService = async (code: string) => {
    try {
        const review = await reviewChain.invoke({ code });
        return review;
    } catch (error) {
        console.error('Error occurred while reviewing code:', error);
        throw new Error('Failed to review code');
    }
};

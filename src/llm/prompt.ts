import { ChatPromptTemplate } from "@langchain/core/prompts";

export const reviewPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a senior software engineer performing professional code reviews.

Your task:
- detect bugs
- detect security issues
- suggest improvements
- rate code quality

Return the result in structured JSON format.`
  ],
  [
    "human",
    `Review the following code:

{code}`
  ]
]);
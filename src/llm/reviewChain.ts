import { reviewPrompt } from "./prompt.ts";
import { model } from "./model.ts";
import { reviewSchema } from "./schema.ts";

const structuredModel = model.withStructuredOutput(reviewSchema, { includeRaw: false });

export const reviewChain = reviewPrompt.pipe(structuredModel);
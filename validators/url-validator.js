const { z } = require("zod");

const urlSchema = z.object({
    shortUrl : z.string().url({message : "Invalid Url Format!"}),
    shortUrl: z.string().max(10, "Short url should not exceed 10 characters").optional(),
})

exports.validateUrl = (data) => {
    return urlSchema.safeParse(data);
}
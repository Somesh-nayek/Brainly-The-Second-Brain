import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export function inputValidation(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // Check if req.body exists and contains username and password
    if (!req.body || !req.body.username || !req.body.password) {
        res.status(400).send({ message: "Username and password are required" });
    }

    const { username, password } = req.body;

    // Define the schema for user input validation
    const userSchema = z.object({
        username: z.string().min(3).max(50),
        password: z.string()
            .min(8, "Password must be at least 8 characters long")
            .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .regex(/\d/, "Password must contain at least 1 number")
            .regex(/[^a-zA-Z0-9]/, "Password must contain at least 1 special character")
    });

    // Validate the input against the schema
    const result = userSchema.safeParse({
        username: username,
        password: password
    });

    if (!result.success) {
        res.status(400).send({ message: "Invalid request message framing" });
    }

    // If validation passes, proceed to the next middleware
    next();
}

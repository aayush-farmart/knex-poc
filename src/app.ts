import express, { Request, Response } from "express";
import knex from "knex";
import { development } from "./knexfile";

const db = knex(development);

const app = express();

app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await db.select("*").from("users");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/user", async (req: Request, res: Response) => {
  try {
    const { id, first_name, last_name } = req.body;
    const newUser = await db("users")
      .insert({ id, first_name, last_name })
      .returning("*");
    res.status(201).json(newUser[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await db("users").where("id", userId).first();
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.put("/user/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { first_name, last_name } = req.body;

    const updatedUser = await db("users")
      .where("id", userId)
      .update({ first_name, last_name })
      .returning("*");

    if (updatedUser.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(updatedUser[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const deletedUser = await db("users").where("id", userId).del();

    if (deletedUser === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(204).end(); // 204 No Content indicates a successful deletion
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});

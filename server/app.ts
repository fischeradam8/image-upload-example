import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = "3001";

app.use(cors());

//LIST
app.get("/images", (req: Request, res: Response) => {
  res.send([
    {
      id: "1",
      name: "placeholder1",
      size: "1.21MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum...",
    },
    {
      id: "2",
      name: "placeholder2",
      size: "1.22MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum 2...",
    },
    {
      id: "3",
      name: "placeholder3",
      size: "1.23MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum 3...",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on Port 3001`);
});

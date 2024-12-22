import express, { NextFunction } from 'express';
import todoRoutes from './routes/todos';

const app = express();
const PORT = 8080;

// Parsing the body!
app.use(express.json());

// Middleware!
app.use('/todos', todoRoutes);

// Middleware to handle error of any other request!

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(PORT, () => {
  console.log(`Server listening at port: http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors'
import router from './routes';

const PORT = 4000
const app = express()

app.use([cors(), express.json()])

app.use('/api', router)

app.listen(PORT, () => console.log(`server is listing on port ${PORT}`))

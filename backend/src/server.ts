import express from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const app = express();
app.use(express.json());

app.post('/orphanages', async(request, response)=>{
  const {
    name, 
    latitude,
    longitude,
    about, 
    instructions, 
    opening_hours,
    open_on_weekends
  } = request.body;
  
  const orphanagesRepository = getRepository(Orphanage);

  const orphanages = orphanagesRepository.create({ 
    name, 
    latitude,
    longitude,
    about, 
    instructions, 
    opening_hours,
    open_on_weekends
  })

  await orphanagesRepository.save(orphanages);

})

app.listen(3333, ()=>{
  console.log('Server started on port 3333');
})
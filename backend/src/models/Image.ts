import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  path: string;
}
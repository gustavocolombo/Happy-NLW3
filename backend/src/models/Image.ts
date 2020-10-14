import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('images')
export default class Image{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  path: string;
}
import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Biblioteca } from './entities/biblioteca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BibliotecaService {
  constructor(//Conexión con la base de datos
      @InjectRepository(Biblioteca,'base1')
      private bibliotecaRepository:Repository<Biblioteca>
    ){}
  async create(createBibliotecaDto: CreateBibliotecaDto): Promise<Biblioteca> {
    const libro=this.bibliotecaRepository.create(createBibliotecaDto)
    return this.bibliotecaRepository.save(libro);
    
  }

  findAll() {
    return `This action returns all biblioteca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblioteca`;
  }

  update(id: number, updateBibliotecaDto: UpdateBibliotecaDto) {
    return `This action updates a #${id} biblioteca`;
  }

  async remove(id: number):Promise<string> {
    await this.bibliotecaRepository.remove(id);
    return "Elemento de la base de datos eliminado";
  }
  
}


import { Controller, Get } from '@nestjs/common';

@Controller('alumnos')
export class AlumnosController {
    @Get()
        find(){
            return "Hola alumnos de IAW!!"; 
        }
}

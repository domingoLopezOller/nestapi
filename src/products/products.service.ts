import { HttpStatus, Injectable } from '@nestjs/common';
import { Products } from './products.interface';

@Injectable()
export class ProductsService {
    private products = [];
    getAll():Products[] {
        return this.products;
    }
    getId(id: number): Products {
        return this.products.find( (item: Products) => item.id == id);
    }

    insert(product:Products):{status:HttpStatus,msg:string} {
        this.products = [
            ...this.products,
            product
        ];
        return { status:HttpStatus.OK,  msg: "Nuevo producto insertado"
        }
    }
    update(id: number, body: any) {
        let product: Products = {
        id,
        articulo: body.articulo,
        precio: body.precio,
        }
        this.products = this.products.map( (item: Products) => {
        console.log(item, id, item.id == id);
        return item.id == id ? product : item;
        
        });
    }
    delete(id: number) {
        this.products = this.products.filter( (item: Products) => item.id != id );
        return 'El producto ha sido eliminado'
        }
}

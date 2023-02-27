import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity('productVariant')
export class ProductVariant {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('smallint', { name: 'quantity', default: 0 })
  typeQty: number;

  @Column('varchar')
  type: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
    name: 'createdAt',
  })
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.productVariant)
  product: Product;
}

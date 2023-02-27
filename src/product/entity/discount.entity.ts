
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Product } from './product.entity';

@Entity('discount')
export class Discount{

    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column('float', { name: 'price', precision: 12, default: 0})
    disPercent: number;

    @Column('varchar')
    name: string;

    @Column({
		default: () => 'CURRENT_TIMESTAMP',
		type: 'datetime',
		name: 'createdAt',
	  })
	  createdAt: Date;

      @OneToMany( () => Product, ( product ) => product.category )
      product: Product[];

    // @OneToMany( () => CartItem, ( cartItem ) => cartItem.product )
    // cartItems: CartItem[];

    // @OneToMany( () => OrderItem, ( orderItem ) => orderItem.product )
    // orderItems: OrderItem[];

    // @ManyToOne( () => User, ( user ) => user.products, {
    // 	onDelete: 'RESTRICT',
    // 	onUpdate: 'RESTRICT',
    // } )
    // @JoinColumn( [ { name: 'userId', referencedColumnName: 'id' } ] )
    // user: User;

    // @ManyToMany( () => Category, ( category ) => category.products )
    // categories: Category[];

    // @OneToMany( () => ProductMeta, ( productMeta ) => productMeta.product )
    // productMetas: ProductMeta[];

    // @OneToMany( () => ProductReview, ( productReview ) => productReview.product )
    // productReviews: ProductReview[];

    // @ManyToMany( () => Tag, ( tag ) => tag.products )
    // @JoinTable( {
    // 	name: 'product_tag',
    // 	joinColumns: [ { name: 'productId', referencedColumnName: 'id' } ],
    // 	inverseJoinColumns: [ { name: 'tagId', referencedColumnName: 'id' } ],
    // 	schema: 'shop',
    // } )
    // tags: Tag[];

}

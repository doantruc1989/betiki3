import { SharedProp } from 'src/users/entity/sharedProp.helper';
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    // JoinColumn,
    // JoinTable,
    // ManyToMany,
    // ManyToOne,
    // OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Category } from './category';
import { Discount } from './discount.entity';
import { ProductVariant } from './productVariant.entity';
import { Review } from './review.entity';

// import { CartItem } from './CartItem';
// import { OrderItem } from './OrderItem';
// import { User } from './User';
// import { Category } from './Category';
// import { ProductMeta } from './ProductMeta';
// import { ProductReview } from './ProductReview';
// import { Tag } from './Tag';

@Entity('product')
export class Product{

    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column('varchar', { name: 'productName'})
    productName: string;

    @Column('float', { name: 'price', precision: 12, default: 0})
    price: number;

    @Column('float', { name: 'initialPrice', precision: 12, default: 0 })
    initialPrice: number;

    @Column('smallint', { name: 'quantity', default: 0})
    quantity: number;

    @Column('varchar')
    image: string;

    @Column('varchar')
    category: string;

    @Column('varchar')
    brand: string;

    @Column('varchar')
    path: string;

    @Column('text', { name: 'content', nullable: true })
    content: string | null;

    @Column({
		default: () => 'CURRENT_TIMESTAMP',
		type: 'datetime',
		name: 'createdAt',
	  })
	  createdAt: Date;

    @ManyToOne(() => Category, (category) => category.productId)
    categoryID: Category

    @ManyToOne(() => Discount, (discount) => discount.product)
    discount: Discount

    @OneToOne(() => Review, (review) => review.product)
    @JoinColumn()
    review: Review

    @OneToMany( () => ProductVariant, ( productVariant ) => productVariant.product )
    productVariant: ProductVariant[];

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

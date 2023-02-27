import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('text')
  comment: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
    name: 'createdAt',
  })
  createdAt: Date;

  @OneToOne(() => Product, (product) => product.review)
  product: Product;

  @OneToOne(() => User, (user) => user.review)
  @JoinColumn()
  user: User;

  //   @OneToMany( () => Product, ( product ) => product.category )
  //   product: Product[];

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

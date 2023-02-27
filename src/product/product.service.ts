import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import EditProductDto from './dto/editProduct.dto';
import NewProductDto from './dto/newProduct.dto';
import { Product } from './entity/product.entity';
import { Category } from './entity/category';
import NewCategoryDto from './dto/newCategory.dto';
import EditCategoryDto from './dto/editCategory.tdo';
import SearchProductDto from './dto/searchProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createProduct(newProductDto: NewProductDto) {
   const product = await this.productRepository
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.categoryID", "category")
    .insert()
    .into(Product)
    .values(newProductDto)
    .execute()
    return product;
  }

  async listAllCategory() {
    return await this.categoryRepository.find();
  }

  async getProductbyCat(searchProductDto: SearchProductDto) {
    const products = await this.productRepository.createQueryBuilder('product');

    if(searchProductDto.search === "searchall") {
      return products
      .where(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
      .orWhere(`LOWER(id) LIKE '%${searchProductDto.sortBy}%'`)
      .orWhere(`LOWER(price) LIKE '%${searchProductDto.sortBy}%'`)
      .orWhere(`LOWER(content) LIKE '%${searchProductDto.sortBy}%'`)
      .orWhere(`LOWER(category) LIKE '%${searchProductDto.sortBy}%'`)
      .take(10)
      .getMany()
    }

    // if(searchProductDto.search === "searchadmin") {
    //   return products
    //   .where(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
    //   .orWhere(`LOWER(price) LIKE '%${searchProductDto.sortBy}%'`)
    //   .orWhere(`LOWER(content) LIKE '%${searchProductDto.sortBy}%'`)
    //   .orWhere(`LOWER(category) LIKE '%${searchProductDto.sortBy}%'`)
    //   .take(10)
    //   .getMany()
    // }

    if(searchProductDto.search === "adminasc") {
      return products
      .orderBy(`product.${searchProductDto.sortBy}`, 'ASC')
      .getMany();
    }

    if(searchProductDto.search === "admindesc") {
      return products
      .orderBy(`product.${searchProductDto.sortBy}`, 'DESC')
      .getMany();
    }

    if(searchProductDto.search === "random") {
      return products
      .select()
      .orderBy('RAND()')
      .take(18)
      .getMany();
    }

    if(searchProductDto.search === "danhchoban") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if(searchProductDto.search === "dichvuso") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if(searchProductDto.search === "dealsieuhot") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if(searchProductDto.search === "revodoi") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if(searchProductDto.search === "thoitrang") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if(searchProductDto.search === "trending") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.price`, 'ASC')
      .getMany()
    }

    if (searchProductDto.search === "phobien") {
      return products.where({category: searchProductDto.category})
      .getMany()
    };

    if(searchProductDto.search === "asc") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.${searchProductDto.sortBy}`, 'ASC')
      .getMany();
    }

    if(searchProductDto.search === "desc") {
      return products
      .where({category: searchProductDto.category})
      .orderBy(`product.${searchProductDto.sortBy}`, 'DESC')
      .getMany();
    }
    if (searchProductDto.search === 'gia2') {
      return products
        .where({ category: searchProductDto.category })
        .andWhere({ price: MoreThanOrEqual(searchProductDto.fromPrice) })
        .andWhere({ price: LessThanOrEqual(searchProductDto.toPrice) })
        .getMany();
    }

    if(searchProductDto.search === 'gia3') {
      return products
      .where({category: searchProductDto.category})
      .andWhere({price : MoreThanOrEqual(searchProductDto.fromPrice)})
      .andWhere({price : LessThanOrEqual(searchProductDto.toPrice)})
      .getMany();
    }

    if(searchProductDto.search === 'gia4') {
      return products
      .where({category: searchProductDto.category})
      .andWhere({price : MoreThanOrEqual(searchProductDto.fromPrice)})
      .andWhere({price : LessThanOrEqual(searchProductDto.toPrice)})
      .getMany();
    }

    if(searchProductDto.search === 'gia1') {
      return products
      .where({category: searchProductDto.category})
      .andWhere({price : MoreThanOrEqual(searchProductDto.fromPrice)})
      .andWhere({price : LessThanOrEqual(searchProductDto.toPrice)})
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc1') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc2') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc3') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc4') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc5') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }

    if(searchProductDto.search === 'danhmuc6') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }
    if(searchProductDto.search === 'danhmuc7') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }
    if(searchProductDto.search === 'danhmuc8') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }
    if(searchProductDto.search === 'danhmuc9') {
      return products
      .where({category: searchProductDto.category})
      .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`
      )
      .getMany();
    }
return products.getMany()
  }

  async adminEditCategory(id: number, editCategory: EditCategoryDto) {
    const category = await this.categoryRepository.findOneBy({ id });
    category.category = editCategory.category;
    category.image = editCategory.image;
    category.path = editCategory.path;
    category.parentId = editCategory.parentId;
    const updatedCategory = await this.categoryRepository.save(category);
    return updatedCategory;
  }

  async adminDeleteCategory(id: number) {
    try {
      await this.categoryRepository.delete(id);
    } catch (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('deleted');
      }
    }
  }

  async adminNewCategory(newCategory: NewCategoryDto) {
    return await this.categoryRepository.save(newCategory);
  }

  async listProduct(page: number) {
    const products = await this.productRepository
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.categoryID", "category")
    .skip(18*(page -1))
    .take(18)
    .getMany()
  
    return products;
  }

  async list6Product() {
    const products = await this.productRepository.find({ take: 6 });
    return products;
  }

  async getProductById(id: number) {
    const product = await this.productRepository
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.categoryID", "category")
    .where({id:id})
    .getMany()
    return product;
  }

  async getByCategory(id: number) {
    const products = await this.categoryRepository.find({
      where: { id: id },
    });
    return products;
  }

  async editProduct(id: number, editProductDto: EditProductDto) {
    const product = await this.productRepository.findOneBy({ id });
    product.category = editProductDto.category;
    product.content = editProductDto.content;
    product.image = editProductDto.image;
    product.price = editProductDto.price;
    product.initialPrice = editProductDto.initialPrice;
    product.productName = editProductDto.productName;
    product.quantity = editProductDto.quantity;
    const updatedProduct = this.productRepository.save(product);
    return updatedProduct;
  }

  async deleteThisProduct(id: number) {
    try {
      await this.productRepository.delete(id);
    } catch (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('deleted');
      }
    }
  }

  async adminCheckQty() {
    return await this.productRepository.find({
      where: { quantity: LessThanOrEqual(40) },
    });
  }
}

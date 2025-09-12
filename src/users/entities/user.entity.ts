// src/users/entities/user.entity.ts
import { ProductEntity } from '../../products/entities/products.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Role } from '../../commons/enums/role.enum';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User, // Todo novo usuário será 'user' por padrão
  })
  role: Role;

  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.user)
  products: ProductEntity[];
}
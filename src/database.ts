import { Pack } from './class/Pack';
import { Product } from './class/Product';

export const products: Product[] = [
  new Product(16, 'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML', 18.44, 20.49),
  new Product(18, 'BEBIDA ENERGÉTICA VIBE 2L', 8.09, 8.99),
  new Product(19, 'ENERGÉTICO  RED BULL ENERGY DRINK 250ML', 6.56, 7.29),
  new Product(20, 'ENERGÉTICO RED BULL ENERGY DRINK 355ML', 9.71, 10.79),
  new Product(21, 'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML', 10.71, 11.71),
  new Product(22, 'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML', 6.74, 7.49),
  new Product(23, 'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L', 2.15, 2.39),
  new Product(24, 'FILME DE PVC WYDA 28CMX15M', 3.59, 3.99),
  new Product(26, 'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M', 5.21, 5.79),
  new Product(1000, 'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES', 48.54, 53.94),
  new Product(1010, 'KIT ROLO DE ALUMÍNIO + FILME PVC WYDA', 8.8, 9.78),
  new Product(1020, 'SUPER PACK RED BULL VARIADOS - 6 UNIDADES', 51.81, 57.0)
];

export const packs: Pack[] = [
  new Pack(111, 1000, 18, 6),
  new Pack(222, 1010, 24, 1),
  new Pack(333, 1010, 26, 1),
  new Pack(444, 1020, 19, 3),
  new Pack(555, 1020, 21, 3)
];

import cors from 'cors';
import { randomUUID } from 'crypto';
import express, { Request, Response } from 'express';
import * as fastcsv from 'fast-csv';
import multer from 'multer';
import path from 'path';

import { packs, products } from './database';
import { CSVRow } from './types/CSVrow';
import { ValidationResult } from './types/ValidationResult';

const app = express();
const port = 9999;

app.use(cors());
app.use(express.json());

// Defina a variável 'components' aqui
const components = products.filter((product) => packs.some((pack) => pack.product_id === product.code));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Aberto' });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'upload/'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const randomName = `${randomUUID()}${ext}`;
    cb(null, randomName);
  }
});

function fileFilter(req: any, file: any, cb: any) {
  if (file.mimetype === 'text/csv') {
    cb(null, true);
  } else {
    cb(new Error('Apenas arquivos CSV são permitidos.'), false);
  }
}

const upload = multer({ storage, fileFilter });

app.post('/validar', upload.single('arquivo'), (req, res) => {
  if (!req.file) {
    console.log('Nenhum arquivo CSV enviado.');
    return res.status(400).send('Nenhum arquivo CSV enviado.');
  }

  const csvData: CSVRow[] = [];

  fastcsv
    .parseFile(req.file.path, { headers: true })
    .on('data', (row) => {
      // Converter o valor de 'new_price' para número decimal
      row.new_price = parseFloat(row.new_price);
      csvData.push(row);
    })
    .on('end', () => {
      console.log('Arquivo CSV processado com sucesso:', csvData);

      const results: ValidationResult[] = [];

      // Iterar sobre os dados CSV e processar apenas os produtos.
      csvData.forEach((data) => {
        const productCode = parseInt(data.product_code, 10); // Converter para número.
        const newPrice = data.new_price;

        const product = products.find((p) => p.code === productCode);

        if (product) {
          // Verifique se o product_code tem 4 dígitos (se for um Pack).
          if (productCode >= 1000 && productCode <= 9999) {
            const pack = packs.find((p) => p.pack_id === productCode);

            if (pack) {
              // Encontre o componente correto com base no _product_id do Pack.
              const component = components.find((c) => c.code === pack.product_id);
              console.log(component);

              if (component) {
                // Calcule o preço unitário do pacote e aplique a validação.
                const status = pack.validateNewPrice(newPrice, component);

                results.push({
                  product_code: productCode,
                  product_name: product.name,
                  new_price: newPrice,
                  status: status
                });
              } else {
                results.push({
                  product_code: productCode,
                  product_name: 'Componente não encontrado',
                  new_price: newPrice,
                  status: 'ERROR' // Ou outra indicação de que o componente não foi encontrado.
                });
              }
            } else {
              results.push({
                product_code: productCode,
                product_name: 'Pack não encontrado',
                new_price: newPrice,
                status: 'ERROR' // Ou outra indicação de que o pack não foi encontrado.
              });
            }
          } else {
            // Aplique a lógica de validateNewPrice() em Product.
            const status = product.validateNewPrice(newPrice);

            results.push({
              product_code: productCode,
              product_name: product.name,
              new_price: newPrice,
              status: status
            });
          }
        } else {
          // Trate o caso em que o produto não foi encontrado, se necessário.
          results.push({
            product_code: productCode,
            product_name: 'Produto não encontrado',
            new_price: newPrice,
            status: 'ERROR' // Ou outra indicação de que o produto não foi encontrado.
          });
        }
      });

      res.status(200).json({ data: results });
    })
    .on('error', (error) => {
      console.error('Erro ao processar o arquivo CSV:', error);
      res.status(500).send('Erro ao processar o arquivo CSV.');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

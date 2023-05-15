import fs from "fs";
import chalk from 'chalk';

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório!'))
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, "utf-8")
    console.log(chalk.green(texto))
  } catch (erro) {
    trataErro(erro)
  }
}

// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   fs.promises
//     .readFile(caminhoDoArquivo, "utf-8")
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

// function pegaArquivo(caminhoDoArquivo) {
//   fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto) => {
//     if (erro) {
//       trataErro(erro)
//     }
//     console.log(chalk.green(texto));
//   })
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/texto');
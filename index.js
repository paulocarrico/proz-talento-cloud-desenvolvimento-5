const prompts = require("prompts");

const main = async () => {
  console.log("\n");
  const selectOperation = [
    {
      type: "number",
      name: "operation",
      message: `O que deseja fazer?\n
      1 - Soma
      2 - Subtração
      3 - Multiplicação
      4 - Divisão      
      0 - Sair`,
      required: true,
    },
  ];

  let response = await prompts(selectOperation);

  const operation = response.operation;
  if (operation === 0) process.exit(1);

  if (operation > 4) {
    console.log("Essa opção não existe");
    console.log("\n");
    main();
  }

  const setFirstNumber = [
    {
      type: "number",
      name: "firstNumber",
      message: "Informe o Primeiro Número",
      required: true,
    },
  ];
  response = await prompts(setFirstNumber);
  const firstNumber = response.firstNumber;

  const setSecondNumber = [
    {
      type: "number",
      name: "secondNumber",
      message: "Informe o Segundo Número",
      required: true,
    },
  ];
  response = await prompts(setSecondNumber);
  const secondNumber = response.secondNumber;
  let result = "";

  switch (operation) {
    case 1:
      result = firstNumber + secondNumber;
      break;
    case 2:
      result = firstNumber - secondNumber;
      break;
    case 3:
      result = firstNumber * secondNumber;
      break;
    case 4:
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("Essa opção não existe");
      console.log("\n");
      main();
      break;
  }

  console.log("\n");
  console.log("Operação:", operation);
  console.log("Primeiro Número:", firstNumber);
  console.log("Segundo Número:", secondNumber);
  console.log("Resultado:", result);

  main();
};

main();

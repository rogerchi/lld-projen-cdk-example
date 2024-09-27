import type { SQSHandler } from 'aws-lambda';

export const handler: SQSHandler = async (event) => {
  console.log('Hello from Lambda!');
  console.log(event);

  console.log('Goodbye from Lambda!');
  return;
};

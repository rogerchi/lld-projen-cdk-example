import path from 'path';
import { StackProps, Stack, Duration } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export interface MyStackProps extends StackProps {}

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: MyStackProps) {
    super(scope, id, props);

    const lambdaFn = new NodejsFunction(this, 'MyFunction', {
      entry: path.join(__dirname, '..', 'handlers', 'my-function.ts'),
      runtime: Runtime.NODEJS_20_X,
      timeout: Duration.minutes(5),
    });

    const queue = new Queue(this, 'MyQueue', {
      visibilityTimeout: Duration.minutes(5),
    });

    lambdaFn.addEventSource(new SqsEventSource(queue));
  }
}

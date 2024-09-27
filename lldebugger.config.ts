import { type LldConfigTs } from 'lambda-live-debugger';

export default {
  // Framework to use
  framework: 'other',
  // AWS CDK framework context
  // context:
  // Serverless Framework stage
  // stage:
  // Monorepo subfolder
  // subfolder:
  // Filter by function name. You can use * as a wildcard
  // function:
  // AWS profile
  // profile:
  // AWS region
  region: 'us-east-1',
  // AWS role
  // role:
  // SAM framework environment
  // configEnv:
  // SAM framework configuration file
  // samConfigFile:
  // SAM framework template file
  // samTemplateFile:
  // Observable mode
  observable: false,
  // Observable mode interval
  // interval:
  // Verbose logging
  verbose: false,
  // Modify Lambda function list or support custom framework
  getLambdas: async (_foundLambdas) => {
    return [
      {
        functionName:
          'lld-projen-cdk-example-personal-MyFunction3BAA72D1-HFiqH2xKCdlz',
        codePath: 'src/handlers/my-function.ts',
      },
    ];
  },
} satisfies LldConfigTs;

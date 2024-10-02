import { type LldConfigTs } from 'lambda-live-debugger';

export default {
  // Framework to use
  framework: 'cdk',
  // AWS CDK framework context
  // context:
  // Serverless Framework stage
  // stage:
  // Monorepo subfolder
  // subfolder:
  // Filter by function name. You can use * as a wildcard
  // function:
  // AWS profile
  // profile: '',
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
  verbose: true,
  // Modify Lambda function list or support custom framework
  getLambdas: async (foundLambdas) => {
    // console.log('foundLambdas', foundLambdas);
    return foundLambdas?.map((fn) => ({
      ...fn,
      esBuildOptions: { ...fn.esBuildOptions, metafile: false },
    }));
  },
} satisfies LldConfigTs;

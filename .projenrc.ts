import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.160.0',
  defaultReleaseBranch: 'main',
  name: 'lld-projen-cdk-example',
  projenrcTs: true,
  devDeps: ['lambda-live-debugger', '@types/aws-lambda'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addTask('deploy:me', {
  exec: 'npx projen deploy lld-projen-cdk-example-personal-*',
  env: {
    PERSONAL_STACK_NAME: '$(whoami)',
  },
});

project.tsconfigDev.addInclude('./lldebugger.config.ts');

project.addGitIgnore('.lldebugger');

project.synth();

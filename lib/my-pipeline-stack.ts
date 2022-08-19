import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { MyPipelineAppStage } from './my-pipeline-app-stage';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';

interface MyPipelineStackProps extends cdk.StackProps {
  repoString: string,
}

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MyPipelineStackProps) {
    super(scope, id, props);

    const repoString = props.repoString

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub(repoString, 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    const testingStage = pipeline.addStage(new MyPipelineAppStage(this, "test", {
      // env: { account: "181481668787", region: "eu-west-1" }
    }));
    testingStage.addPost(new ManualApprovalStep('approval'));

    
  }
}
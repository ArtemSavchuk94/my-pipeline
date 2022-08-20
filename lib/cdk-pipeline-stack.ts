import * as cdk from 'aws-cdk-lib';
import { ConfigurationSetTlsPolicy } from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';
import { CodePipeline,CodePipelineSource,ShellStep } from 'aws-cdk-lib/pipelines';
import { CdkStage } from './cdk-stage';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const pipeline = new CodePipeline(this,"my-pileline",{
      synth: new ShellStep('Synth',{ commands:['npm ci','npm run build', 'npx cdk synth'],
      input: CodePipelineSource.gitHub('ArtemSavchuk94/my-pipeline','main')
    
      })
    })
    
    pipeline.addStage(new CdkStage (this,"my-stage"))








  }
}

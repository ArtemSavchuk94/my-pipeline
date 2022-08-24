import * as cdk from 'aws-cdk-lib';
import { ConfigurationSetTlsPolicy } from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';
import { CodePipeline,CodePipelineSource,ShellStep } from 'aws-cdk-lib/pipelines';
import { CdkStage } from './cdk-stage';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

 export interface CdkPipelineStackProps extends cdk.StackProps {
  branchName:string
}
export class CdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props:CdkPipelineStackProps) {
    super(scope, id, props);
    const myBranch = props.branchName



    const pipeline = new CodePipeline(this,"my-cicd-pileline",{
      pipelineName:'my-cicd-pipeline',
      synth: new ShellStep('Synth',{ commands:['npm ci','npm run build', `npx cdk synth ${this.stackName}`],
      input: CodePipelineSource.gitHub('ArtemSavchuk94/my-pipeline',props.branchName)
    
      })
    })
    
     pipeline.addStage(new CdkStage (this,"my-dev-stage",))
   


   




  }
}

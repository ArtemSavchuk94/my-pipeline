import * as cdk from 'aws-cdk-lib';
import { ConfigurationSetTlsPolicy } from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';
import { CodePipeline,CodePipelineSource,ShellStep } from 'aws-cdk-lib/pipelines';
import { Stage,StageProps } from 'aws-cdk-lib';
import { CdkStack} from './cdk-stack'





export class CdkStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
      super(scope, id, props);
      
      new CdkStack (this,'my-stackS3')
    }
  }
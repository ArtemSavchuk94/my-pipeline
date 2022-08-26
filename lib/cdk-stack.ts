import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkStack extends Stack {
    constructor(scope:Construct, id:string, props?: StackProps){
        super(scope,id,props);
    const bucket = new Bucket(this,'my-bucket',{
        removalPolicy:RemovalPolicy.DESTROY,
        autoDeleteObjects:true,
    })
   
   
    }
}
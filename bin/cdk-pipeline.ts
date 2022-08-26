#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';
import {CdkPipelineStackProps} from '../lib/cdk-pipeline-stack'


const app = new cdk.App();
 
 const myStackMain = new CdkPipelineStack(app, 'main-pipeline',{
   branchName:'main',
   stackName:'main-pipeline'})
 const myStackDev = new CdkPipelineStack(app, 'dev-pipeline',{
    branchName:'dev',
    stackName:'dev-pipeline'})



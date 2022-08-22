#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';
import {CdkPipelineStackProps} from '../lib/cdk-pipeline-stack'


const app = new cdk.App();
 //new CdkPipelineStack(app, 'demo-pipeline',{branchName:'main'}),

 const myStackMain = new CdkPipelineStack(app, 'main-pipeline',{
   branchName:'main',
   stackName:'mainStack'})
 const myStackDev = new CdkPipelineStack(app, 'dev-pipeline',{
    branchName:'dev',
    stackName:'devStack'})


//app.synth();
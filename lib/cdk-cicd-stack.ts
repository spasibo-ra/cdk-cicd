import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { PipelineStage } from './pipelineStage';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'MainPipeline', {
      pipelineName: 'MainPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('spasibo-ra/cdk-cicd', 'cicd-practice'),
        commands: [
          'npm ci',
          'npx cdk synth'
        ]
      })
    });

    const testStage = pipeline.addStage(new PipelineStage(this, 'PipelineTestStage', {
      stageName: 'test'
    }));
  }
}

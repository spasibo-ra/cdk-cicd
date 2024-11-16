import { Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface LambdaStackProps extends StackProps {
  stageName?: string
}

export class LambdaStack extends Stack {
  constructor(event: Construct, id: string, props: LambdaStackProps) {
    super(event, id, props);

    new NodejsFunction(this, 'cdk-cicd-HelloLambda', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'handler',
      entry: (join(__dirname, '..', 'services', 'hello.ts')),
      environment: {
        STAGE: props.stageName!
      }
    })
  }

}
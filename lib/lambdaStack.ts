import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

interface LambdaStackProps extends StackProps {
  stageName?: string
}

export class LambdaStack extends Stack {
  constructor(event: Construct, id: string, props: LambdaStackProps) {
    super(event, id, props);
  }

}
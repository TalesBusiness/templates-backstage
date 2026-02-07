variable "region" {
  default = "${{ values.region }}"
}

provider "aws" {
  region = var.region
}

resource "aws_sns_topic" "this" {
  name = "${{ values.component_id }}-topic"
}

resource "aws_sqs_queue" "this" {
  name = "${{ values.component_id }}-queue"
}

resource "aws_sns_topic_subscription" "this" {
  topic_arn = aws_sns_topic.this.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.this.arn
}

resource "aws_sqs_queue_policy" "this" {
  queue_url = aws_sqs_queue.this.id
  policy    = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "sqs-sns-policy",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "sns.amazonaws.com"
      },
      "Action": "sqs:SendMessage",
      "Resource": "${aws_sqs_queue.this.arn}",
      "Condition": {
        "ArnEquals": {
          "aws:SourceArn": "${aws_sns_topic.this.arn}"
        }
      }
    }
  ]
}
POLICY
}

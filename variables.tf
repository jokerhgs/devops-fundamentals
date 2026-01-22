variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket. MUST be globally unique."
}

variable "environment" {
  type        = string
  description = "The environment the resources are for (development, production, staging)"
}



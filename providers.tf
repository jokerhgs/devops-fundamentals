terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.28"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      environment = var.environment
    }
  }
}

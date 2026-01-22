variable "s3_bucket" {
  type = object({
    id  = string
    arn = string
  })
}

variable "cloudfront_distribution" {
  type = object({
    arn = string
  })
}

